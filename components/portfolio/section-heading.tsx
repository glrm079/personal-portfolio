import type { ReactNode } from "react";

export function SectionHeading({
  label,
  title,
  children,
}: {
  label?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div>
      {label && (
        <p className="mb-5 font-mono text-[.67rem] font-medium uppercase tracking-[.1em] text-muted">
          {label}
        </p>
      )}
      <h2 className="font-sans text-[clamp(2.4rem,4.5vw,4.8rem)] leading-none font-semibold tracking-normal">
        {title}
      </h2>
      {children}
    </div>
  );
}
