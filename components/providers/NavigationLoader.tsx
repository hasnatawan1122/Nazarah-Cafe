"use client";

import { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { CoffeeCupLoader } from "@/components/ui/CoffeeCupLoader";

function NavigationLoaderInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);

  // When pathname or searchParams change, the destination has loaded
  useEffect(() => {
    setIsNavigating(false);
  }, [pathname, searchParams]);

  useEffect(() => {
    // Listen for internal navigation clicks
    const handleDocumentClick = (e: MouseEvent) => {
      // Don't intercept modified clicks (Ctrl+Click, Cmd+Click, Shift+Click)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Only handle internal navigation links (starts with / and not hash/external/blank)
      if (
        href.startsWith("/") &&
        !href.startsWith("//") &&
        !href.startsWith("/#") &&
        !anchor.hasAttribute("download") &&
        anchor.target !== "_blank"
      ) {
        const currentPath = window.location.pathname;
        const currentSearch = window.location.search;
        const fullCurrent = currentPath + currentSearch;

        // Clean href target without hash
        const targetUrl = href.split("#")[0];

        // Only show if navigating to a distinct page/query
        if (targetUrl && targetUrl !== fullCurrent && targetUrl !== currentPath) {
          setIsNavigating(true);

          // Absolute safety timeout: ensure loader never stays stuck under any condition
          const timer = setTimeout(() => {
            setIsNavigating(false);
          }, 2500);

          return () => clearTimeout(timer);
        }
      }
    };

    document.addEventListener("click", handleDocumentClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleDocumentClick, { capture: true });
    };
  }, [pathname]);

  if (!isNavigating) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-cream/92 backdrop-blur-md animate-fadeIn"
    >
      <CoffeeCupLoader
        fullScreen={false}
        text="Brewing Something Special..."
        subtext="Tohfa Sweets & Nazarah Cafe"
        size="md"
      />
    </div>
  );
}

export function NavigationLoader() {
  return (
    <Suspense fallback={null}>
      <NavigationLoaderInner />
    </Suspense>
  );
}
