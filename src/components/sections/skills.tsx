"use client";

import { useEffect, type CSSProperties } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILLS } from "@/data/constants";
import { usePerfProfile } from "@/hooks/use-perf-profile";
import { cn } from "@/lib/utils";
import { useSceneStatus } from "@/lib/scene-health";

/**
 * Skills are visible HTML until the keyboard scene is ready, and remain
 * available to assistive technology while the 3D keyboard is displayed.
 * Reduced motion, unavailable WebGL, scene failures, and mobile viewports keep the grid visible.
 */
const SkillsSection = () => {
  const { disable3D, ready, isMobile } = usePerfProfile();
  const sceneStatus = useSceneStatus();
  const showGrid = !ready || disable3D || sceneStatus !== "ready" || isMobile;

  useEffect(() => {
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(frame);
  }, [showGrid]);

  return (
    <SectionWrapper
      id="skills"
      className={
        showGrid
          ? "flex w-full min-h-screen flex-col justify-center py-16 md:py-24"
          : "w-full h-screen md:h-[150dvh] pointer-events-none"
      }
    >
      <SectionHeader
        id="skills"
        title="Tech Stack"
        desc={showGrid ? "Tools & engines I build with" : "(hint: press a key)"}
        className={showGrid ? "mb-8 sm:mb-10 md:mb-14" : "top-[70px] sticky mb-96"}
      />
      <ul
        className={
          showGrid
            ? "mx-auto grid w-full max-w-5xl grid-cols-2 gap-2.5 sm:gap-4 px-3 sm:px-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            : "sr-only"
        }
      >
        {Object.values(SKILLS).map((skill) => (
          <li
            key={skill.name}
            style={{ "--skill": skill.color } as CSSProperties}
            className={cn(
              "pointer-events-auto",
              "group relative flex flex-col items-center justify-center gap-2 sm:gap-3 overflow-hidden rounded-xl sm:rounded-2xl p-3 sm:p-5",
              "border border-border/60 bg-secondary/20 backdrop-blur-sm",
              "transition-[transform,border-color,background-color,box-shadow] duration-300",
              "hover:-translate-y-1 hover:border-[var(--skill)] hover:bg-secondary/40 active:scale-95",
              "hover:shadow-[0_10px_40px_-12px_var(--skill)]"
            )}
          >
            {/* per-skill colored glow */}
            <span
              aria-hidden
              style={{ background: "var(--skill)" }}
              className="pointer-events-none absolute -top-6 h-16 w-16 rounded-full opacity-25 blur-2xl transition-opacity duration-300 group-hover:opacity-70"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={skill.icon}
              alt={skill.label}
              width={44}
              height={44}
              loading="lazy"
              className="relative size-8 sm:size-9 md:size-11 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
            />
            <span className="relative text-center text-[11px] sm:text-xs md:text-sm font-medium text-foreground/80 transition-colors group-hover:text-foreground line-clamp-1">
              {skill.label}
            </span>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
};

export default SkillsSection;


