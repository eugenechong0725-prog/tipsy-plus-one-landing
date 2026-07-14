"use client";

import { useEffect } from "react";

export default function RevealMotion() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(".section-reveal, .premium-card"),
    );

    revealTargets.forEach((el, index) => {
      if (el.classList.contains("premium-card")) {
        el.style.setProperty("--reveal-delay", `${Math.min(index % 6, 4) * 45}ms`);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    revealTargets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
