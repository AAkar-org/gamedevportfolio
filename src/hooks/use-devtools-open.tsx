import { useEffect, useState } from "react";

export const useDevToolsOpen = () => {
  const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Use passive dimension check instead of devtools-detector's console.log
    // loop, which overloads Turbopack's HMR websocket (WS_ERR_UNSUPPORTED_MESSAGE_LENGTH)
    // and causes CPU throttling.
    const check = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      if (widthThreshold || heightThreshold) {
        setIsDevToolsOpen(true);
      }
    };

    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  return { isDevToolsOpen };
};
