"use client";

import { useEffect } from "react";

// Every page change starts at the top of the new page (unless the address points at a section), so an
// essay opens on its title and byline, not part way down under the sticky header.
export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, []);
  return children;
}
