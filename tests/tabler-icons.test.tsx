// @vitest-environment jsdom

import { act } from "react";
import { createRoot } from "react-dom/client";
import { afterEach, describe, expect, it, vi } from "vitest";

import { PortfolioHeader } from "../components/portfolio/portfolio-header";
import { ThemeProvider } from "../components/portfolio/theme-provider";

describe("Tabler icon controls", () => {
  afterEach(() => document.body.replaceChildren());

  it("renders a Tabler icon for the mobile menu", async () => {
    vi.stubGlobal(
      "IntersectionObserver",
      class {
        observe() {}
        disconnect() {}
      },
    );
    window.matchMedia = vi.fn().mockReturnValue({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    });
    const container = document.createElement("div");
    const root = createRoot(container);

    await act(async () => {
      root.render(
        <ThemeProvider>
          <PortfolioHeader
            locale="pt"
            navigation={{
              about: "Perfil",
              work: "Projetos",
              services: "Stack",
              experience: "Experiência",
              contact: "Contato",
            }}
          />
        </ThemeProvider>,
      );
    });

    expect(container.innerHTML).toContain("tabler-icon-menu-2");
    expect(container.innerHTML).toContain(
      'aria-label="Abrir menu de navegação"',
    );
    expect(container.innerHTML).toContain("tabler-icon-moon");

    await act(async () => {
      container
        .querySelector<HTMLButtonElement>(
          '[aria-label="Abrir menu de navegação"]',
        )
        ?.click();
    });

    expect(container.innerHTML).toContain("tabler-icon-x");
    expect(container.innerHTML).toContain(
      'aria-label="Fechar menu de navegação"',
    );
    root.unmount();
  });
});
