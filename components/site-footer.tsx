import { EMAIL } from "@/lib/profile";
import { SOCIAL } from "@/lib/social";

// The same footer as the homepage, with the ways to get in touch on every page.
export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-rule)]">
      <div className="max-w-[1080px] mx-auto px-6 pt-7 pb-11 flex flex-col sm:flex-row justify-between gap-3 text-[14px] text-[var(--color-body)]">
        <div>© 2026 Mark Hallam · Melbourne, Australia</div>
        <ul className="flex flex-wrap gap-x-5 gap-y-1 list-none m-0 p-0">
          <li><a className="text-[var(--color-link)] no-underline hover:underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          <li><a className="text-[var(--color-link)] no-underline hover:underline" href={SOCIAL.linkedin.url}>LinkedIn</a></li>
          <li><a className="text-[var(--color-link)] no-underline hover:underline" href={SOCIAL.github.url}>GitHub</a></li>
          <li><a className="text-[var(--color-link)] no-underline hover:underline" href="https://github.com/mark-hallam/mstack">mStack</a></li>
        </ul>
      </div>
    </footer>
  );
}
