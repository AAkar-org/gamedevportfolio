"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "../ui/use-toast";
import { themeDisclaimers } from "@/data/constants";

export default function FunnyThemeToggle({
  className,
}: {
  className?: string;
}) {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [counter, setCounter] = React.useState({ dark: 0, light: 0 });
  const { toast } = useToast();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = (newTheme: string, event?: React.MouseEvent) => {
    // Check if browser supports view transitions and motion is permitted
    // @ts-ignore
    const canViewTransition = typeof document !== "undefined" && Boolean(document.startViewTransition);
    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canViewTransition || prefersReducedMotion) {
      setTheme(newTheme);
      return;
    }

    const targetEl = (event?.currentTarget as HTMLElement) || (event?.target as HTMLElement);
    const rect = targetEl?.getBoundingClientRect?.() || {
      top: 24,
      left: typeof window !== "undefined" ? window.innerWidth - 64 : 0,
      width: 36,
      height: 36,
    };
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const right = (typeof window !== "undefined" ? window.innerWidth : 1000) - rect.left;
    const bottom = (typeof window !== "undefined" ? window.innerHeight : 1000) - rect.top;
    const maxRadius = Math.hypot(Math.max(rect.left, right), Math.max(rect.top, bottom));

    try {
      // @ts-ignore
      const transition = document.startViewTransition(() => {
        flushSync(() => {
          setTheme(newTheme);
        });
      });

      transition.ready
        .then(() => {
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${maxRadius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 450,
              easing: "cubic-bezier(0.16, 1, 0.3, 1)",
              pseudoElement: "::view-transition-new(root)",
            }
          );
        })
        .catch(() => {
          setTheme(newTheme);
        });
    } catch {
      setTheme(newTheme);
    }
  };

  const handleToggle = (e: React.MouseEvent) => {
    const active = resolvedTheme || theme || "dark";
    const nextTheme = active === "dark" ? "light" : "dark";

    if (nextTheme === "light") {
      const description =
        themeDisclaimers.light[counter.light % themeDisclaimers.light.length];
      setCounter((prev) => ({ ...prev, light: prev.light + 1 }));
      toast({
        description,
        className:
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-16 md:right-4 z-[999999]",
      });
      toggleTheme("light", e);
    } else {
      const description =
        themeDisclaimers.dark[counter.dark % themeDisclaimers.dark.length];
      setCounter((prev) => ({ ...prev, dark: prev.dark + 1 }));
      toast({
        description,
        className:
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-16 md:right-4 z-[999999]",
      });
      toggleTheme("dark", e);
    }
  };

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className={cn("border-none bg-transparent opacity-0 pointer-events-none", className)}
        aria-hidden="true"
      >
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const isDark = (resolvedTheme || theme) === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("border-none bg-transparent relative overflow-hidden", className)}
      onClick={handleToggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <Sun
        className={cn(
          "h-[1.2rem] w-[1.2rem] transition-all duration-300 pointer-events-none text-foreground",
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        )}
      />
      <Moon
        className={cn(
          "absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 pointer-events-none text-foreground",
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
