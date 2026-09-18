"use client";

import { useEffect } from "react";

function scrollToHash(hash: string, behavior: ScrollBehavior) {
  const target = document.getElementById(hash.slice(1));
  if (!target) return false;
  target.scrollIntoView({ behavior, block: "start" });
  return true;
}

// Next 16 ne neutralise plus `scroll-behavior: smooth` pendant la navigation,
// ce qui fait echouer le defilement vers les ancres : on le gere ici.
// - a l'arrivee sur la page avec un hash (ex. depuis /cgu) : defilement immediat
// - clic sur un lien /#section depuis la page d'accueil : defilement doux
export function HashScroll() {
  useEffect(() => {
    if (window.location.hash) scrollToHash(window.location.hash, "instant");

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return;
      const anchor = (event.target as Element).closest<HTMLAnchorElement>('a[href^="/#"], a[href^="#"]');
      if (!anchor) return;
      const hash = anchor.getAttribute("href")!.replace(/^\//, "");
      if (!scrollToHash(hash, "smooth")) return;
      event.preventDefault();
      history.pushState(null, "", hash);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
