"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"

if (process.env.NODE_ENV === "development") {
  const patch = () => {
    const orig = console.error;
    console.error = function (...args: unknown[]) {
      const msg = args
        .map((a) => {
          try {
            return typeof a === "string" ? a : JSON.stringify(a);
          } catch {
            return String(a);
          }
        })
        .join(" ");
      if (
        msg.includes("Encountered a script tag") ||
        msg.includes("Scripts inside React components are never executed")
      ) {
        return;
      }
      return orig.apply(console, args);
    };
  };
  patch();
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  React.useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const orig = console.error;
      console.error = function (...args: unknown[]) {
        const msg = args.map((a) => (typeof a === "string" ? a : "")).join(" ");
        if (msg.includes("Encountered a script tag")) return;
        return orig.apply(console, args);
      };
    }
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

