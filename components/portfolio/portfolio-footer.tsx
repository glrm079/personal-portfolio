export function PortfolioFooter({ children }: Readonly<{ children: string }>) {
  return (
    <footer className="grid min-h-20 grid-cols-[1fr_1fr_auto] items-center gap-4 border-t border-rule font-mono text-[.6rem] font-medium uppercase tracking-[.1em] text-muted max-md:grid-cols-[1fr_auto]">
      <span>© {new Date().getFullYear()}</span>
      <span className="max-md:hidden">{children}</span>
      <a className="text-xl text-ink" href="#hero-heading">
        ↑
      </a>
    </footer>
  );
}
