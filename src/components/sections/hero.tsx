import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import { config } from "@/data/config";

import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full min-h-[100dvh]")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "min-h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-24 sm:pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col">
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-2 sm:mt-4 font-medium text-sm sm:text-lg md:text-xl text-slate-500 dark:text-zinc-400",
                      "cursor-default bg-clip-text"
                    )}
                  >
                    Hi, I am
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "-ml-[3px] sm:-ml-[6px] leading-[0.92] text-foreground text-left",
                          "font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl",
                          "cursor-default font-display tracking-tight"
                        )}
                      >
                        {config.author.split(" ")[0]}
                        <br />
                        {config.author.split(" ")[1]}
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="bg-popover text-popover-foreground border border-border shadow-md"
                    >
                      theres something waiting for you in devtools
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>

                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start mt-2 sm:mt-4 font-medium text-sm sm:text-lg md:text-xl text-slate-500 dark:text-zinc-400",
                      "cursor-default bg-clip-text"
                    )}
                  >
                    Game Developer | Unity &amp; Unreal Engine
                  </p>
                </BlurIn>
                <BlurIn delay={1.4}>
                  <div className="mt-3 flex items-center gap-2 text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-2xl sm:rounded-full w-fit max-w-full">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="truncate sm:whitespace-normal">Upcoming: Surviving the Adventures of Isla Sentinel</span>
                  </div>
                </BlurIn>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-col gap-3 w-full sm:w-fit">
                <Link
                  href="/resume"
                  className="w-full"
                >
                  <BoxReveal delay={2} width="100%" >
                    <Button className="flex items-center justify-center gap-2 w-full h-11 sm:h-10 text-sm font-semibold">
                      <File size={18} />
                      <p>Resume</p>
                    </Button>
                  </BoxReveal>
                </Link>
                <div className="flex items-center gap-2 sm:gap-3 w-full">
                  <Link href={"#contact"} className="flex-1 sm:flex-none">
                    <Button
                      variant={"outline"}
                      className="w-full h-11 sm:h-10 text-sm font-medium"
                    >
                      Hire Me
                    </Button>
                  </Link>
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <Link
                      href={config.social.instagram}
                      target="_blank"
                      className="cursor-can-hover"
                      aria-label="Instagram"
                    >
                      <Button variant={"outline"} size="icon" className="h-11 w-11 sm:h-10 sm:w-10">
                        <SiInstagram size={18} />
                      </Button>
                    </Link>
                    <Link
                      href={config.social.linkedin}
                      target="_blank"
                      className="cursor-can-hover"
                      aria-label="LinkedIn"
                    >
                      <Button variant={"outline"} size="icon" className="h-11 w-11 sm:h-10 sm:w-10">
                        <SiLinkedin size={18} />
                      </Button>
                    </Link>
                    <Link
                      href={config.social.youtube}
                      target="_blank"
                      className="cursor-can-hover"
                      aria-label="YouTube"
                    >
                      <Button variant={"outline"} size="icon" className="h-11 w-11 sm:h-10 sm:w-10">
                        <SiYoutube size={18} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="hidden sm:block absolute bottom-6 md:bottom-10 left-[50%] translate-x-[-50%] pointer-events-none">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
