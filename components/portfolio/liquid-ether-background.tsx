"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./theme-provider";
import * as THREE from "three";
import { getLiquidEtherSettings } from "@/lib/liquid-ether";

const vertexShader = `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position, 1.0); }
`;

const fragmentShader = `
  precision highp float;
  varying vec2 vUv;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform vec2 uVelocity;
  uniform float uTime;
  uniform float uInteractive;
  uniform float uImpulse;
  uniform float uCursorFalloff;
  uniform float uFlowStrength;
  uniform float uFieldStrength;
  uniform float uOrganicLightStrength;
  uniform float uGlowOpacity;
  uniform vec3 uBase;
  uniform vec3 uFluid;
  uniform vec3 uGlow;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
  float noise(vec2 p) {
    vec2 i = floor(p); vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float value = 0.0; float amplitude = 0.5;
    for (int i = 0; i < 5; i++) { value += amplitude * noise(p); p = p * 2.02 + 13.7; amplitude *= 0.5; }
    return value;
  }
  void main() {
    vec2 uv = vUv;
    uv.x *= uResolution.x / uResolution.y;
    vec2 flow = vec2(fbm(uv * 1.35 + vec2(uTime * .035, -uTime * .025)), fbm(uv * 1.35 + vec2(8.4, uTime * .03)));
    vec2 mouse = uMouse; mouse.x *= uResolution.x / uResolution.y;
    vec2 cursorDirection = uv - mouse;
    float cursor = exp(-uCursorFalloff * dot(cursorDirection, cursorDirection));
    flow += normalize(cursorDirection + .0001) * cursor * uInteractive * uFlowStrength * (.34 + uImpulse * .28);
    flow += uVelocity * cursor * uInteractive * uFlowStrength * 1.35;
    float field = fbm(uv * 1.8 + flow * 2.7 + uTime * .025);
    float organicGlow = cursor * smoothstep(.35, .72, fbm(uv * 3.4 + flow * 1.2 + vec2(uTime * .02, -uTime * .015)));
    field += organicGlow * uInteractive * uFieldStrength * uOrganicLightStrength;
    vec3 color = mix(uBase, uFluid, smoothstep(.28, .78, field) * .42);
    color = mix(color, uGlow, organicGlow * uGlowOpacity);
    gl_FragColor = vec4(color, 1.0);
  }
`;

export function LiquidEtherBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const settings = getLiquidEtherSettings(window.innerWidth);
    const isDark = resolvedTheme === "dark";
    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: "low-power",
    });
    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.zIndex = "0";
    container.appendChild(renderer.domElement);

    const uniforms = {
      uResolution: { value: new THREE.Vector2(1, 1) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uVelocity: { value: new THREE.Vector2(0, 0) },
      uTime: { value: 0 },
      uInteractive: { value: settings.interactive ? 1 : 0 },
      uImpulse: { value: 0 },
      uCursorFalloff: { value: settings.cursorFalloff },
      uFlowStrength: { value: settings.flowStrength },
      uFieldStrength: { value: settings.fieldStrength },
      uOrganicLightStrength: { value: settings.organicLightStrength },
      uGlowOpacity: { value: settings.glowOpacity },
      uBase: { value: new THREE.Color(isDark ? "#0d0d0c" : "#f3f3ef") },
      uFluid: { value: new THREE.Color(isDark ? "#181817" : "#3a3a37") },
      uGlow: { value: new THREE.Color(isDark ? "#f2f2ed" : "#ffffff") },
    };
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    });
    const geometry = new THREE.PlaneGeometry(2, 2);
    scene.add(new THREE.Mesh(geometry, material));

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      const { maxPixelRatio, resolution } = getLiquidEtherSettings(
        window.innerWidth,
      );
      renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, maxPixelRatio) * resolution,
      );
      renderer.setSize(width, height, false);
      uniforms.uResolution.value.set(width, height);
    };
    let previousPointer = new THREE.Vector2(0.5, 0.5);
    let lastPointerMove = performance.now();
    const move = (event: PointerEvent) => {
      const nextPointer = new THREE.Vector2(
        event.clientX / window.innerWidth,
        1 - event.clientY / window.innerHeight,
      );
      uniforms.uVelocity.value.copy(nextPointer).sub(previousPointer);
      uniforms.uImpulse.value = Math.min(
        1,
        uniforms.uVelocity.value.length() * settings.mouseForce + 0.25,
      );
      previousPointer.copy(nextPointer);
      uniforms.uMouse.value.copy(nextPointer);
      lastPointerMove = performance.now();
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });

    let frame = 0;
    const render = (time: number) => {
      if (settings.autoDemo && time - lastPointerMove > 1200) {
        const phase = time * 0.001 * settings.autoSpeed;
        const nextPointer = new THREE.Vector2(
          0.5 + Math.sin(phase) * 0.14 * settings.autoIntensity,
          0.5 + Math.cos(phase * 0.8) * 0.11 * settings.autoIntensity,
        );
        uniforms.uVelocity.value.copy(nextPointer).sub(previousPointer);
        uniforms.uImpulse.value = Math.min(
          1,
          uniforms.uVelocity.value.length() * settings.mouseForce + 0.12,
        );
        previousPointer.copy(nextPointer);
        uniforms.uMouse.value.copy(nextPointer);
      }
      uniforms.uTime.value = time * 0.001;
      uniforms.uImpulse.value *= 0.98;
      uniforms.uVelocity.value.multiplyScalar(0.98);
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };
    render(0);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [resolvedTheme]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    />
  );
}
