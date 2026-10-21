import React from "react";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-border px-4 py-6 sm:flex-row md:px-6 sm:justify-between">
      <p className="text-xs text-muted-foreground" suppressHydrationWarning>
        © {currentYear} {config.author}. All rights reserved.
      </p>
      <SocialMediaButtons />
    </footer>
  );
}

export default Footer;
