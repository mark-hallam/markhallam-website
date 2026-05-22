export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-rule)]">
      <div className="max-w-[880px] mx-auto px-8 py-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[13px] text-[var(--color-muted)]">
        <div>
          © 2026 Mark Hallam · Founder of{" "}
          <span className="gradient-text font-semibold tracking-[0.04em]">SKYCOT</span>
        </div>
        <div>Made in Melbourne</div>
      </div>
    </footer>
  );
}
