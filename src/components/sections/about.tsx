"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Gamepad2,
  Brain,
  Layers,
  GraduationCap,
  Sparkles,
  Compass,
  ArrowUpRight,
  Flame,
  Youtube,
  Radio,
  Users,
  Play,
} from "lucide-react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { config } from "@/data/config";

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <SectionHeader
        id="about"
        title="About Me"
        desc="Systems architect, gameplay programmer, and world builder."
        className="mb-8 sm:mb-12"
      />

      <div className="flex flex-col gap-8 md:gap-12">
        {/* Top Feature: Visionary Upcoming Unreal Major Project */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-secondary/30 p-4 sm:p-6 md:p-8 backdrop-blur-md shadow-lg">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
              <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="default" className="bg-primary text-primary-foreground font-mono uppercase text-xs">
                    Upcoming Unreal Major Project
                  </Badge>
                  <Badge variant="outline" className="border-primary/40 text-primary font-mono text-xs">
                    Unreal Engine 5.6
                  </Badge>
                </div>

                <h3 className="text-xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground uppercase font-display break-words">
                  SURVIVING THE ADVENTURES OF ISLA SENTINEL
                </h3>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  My upcoming Unreal Engine major project is an ambitious survival-adventure title built from the ground up.
                  Blending atmospheric environmental storytelling with complex enemy behavior trees, dynamic hazard systems,
                  and deep gameplay loops on the mysterious Isla Sentinel.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <Link href="#projects">
                    <Button variant="default" size="sm" className="gap-2">
                      Explore Project Scope
                      <ArrowUpRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <span className="text-xs font-mono text-muted-foreground">
                    In Active Development • Unreal Engine 5.6
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 relative aspect-video overflow-hidden rounded-xl border border-border shadow-md group">
                <Image
                  src="/assets/projects-screenshots/isla-sentinel/water-island.jpg"
                  alt="Surviving the Adventures of Isla Sentinel Environment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <p className="text-xs text-white/90 font-mono">
                    Environment Concept &amp; Level Prototype • Isla Sentinel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Bio & Problem Solving Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <Card className="h-full border-border bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">Philosophy &amp; Craft</CardTitle>
                    <p className="text-xs text-muted-foreground">Building games that feel alive</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p className="text-foreground font-medium text-base sm:text-lg">
                  Passionate Game Developer specializing in Unity and Unreal Engine. I combine sharp problem-solving skills and clear communication with hands-on expertise in gameplay mechanics, AI systems, UI design, and animation to build engaging, polished games from the ground up.
                </p>
                <p>
                  Whether architecting cyclic NPC patrol routines using NavMesh and Behavior Trees in Unreal Engine 5.6, or calibrating physics-based platform locomotion and GDD-driven features in Unity, my priority is player feel, responsiveness, and clean systems architecture.
                </p>
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  <div className="p-3 rounded-lg bg-secondary/30 border border-border/50">
                    <Brain className="w-4 h-4 text-primary mb-1" />
                    <p className="font-semibold text-xs text-foreground">AI Behavior Trees</p>
                    <p className="text-[11px] text-muted-foreground">NavMesh, Patrol, Chase</p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/30 border border-border/50">
                    <Layers className="w-4 h-4 text-primary mb-1" />
                    <p className="font-semibold text-xs text-foreground">Gameplay Systems</p>
                    <p className="text-[11px] text-muted-foreground">Combat, Health UI, GDD</p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/30 border border-border/50">
                    <Compass className="w-4 h-4 text-primary mb-1" />
                    <p className="font-semibold text-xs text-foreground">World &amp; Level Design</p>
                    <p className="text-[11px] text-muted-foreground">3D Ruins, Puzzles</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <Card className="h-full border-border bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">Education</CardTitle>
                    <p className="text-xs text-muted-foreground">Academic foundations in game design</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-xl border border-border/70 bg-secondary/20">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-sm text-foreground">Artemisia College of Art &amp; Design</h4>
                      <p className="text-xs font-medium text-primary">B Design in Game Design</p>
                    </div>
                    <Badge variant="secondary" className="text-[10px] font-mono shrink-0">
                      Aug 2023 – May 2027
                    </Badge>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Comprehensive game design curriculum covering gameplay mechanics, 3D modeling, interactive narrative, and game engine architecture.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-border/70 bg-secondary/20">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-sm text-foreground">Delhi Public School, Indore</h4>
                      <p className="text-xs font-medium text-primary">Senior Secondary Certificate</p>
                    </div>
                    <Badge variant="secondary" className="text-[10px] font-mono shrink-0">
                      May 2015 – May 2022
                    </Badge>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Indore, Madhya Pradesh. Foundations in mathematics, science, and computer fundamentals.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Gaming Content Creation & Tester Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex flex-col gap-1.5">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight text-foreground">
              Gaming Content Creation &amp; Tester
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Competitive gameplay stress-testing, mechanics breakdowns, and live broadcasts on YouTube.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-red-500/25 bg-gradient-to-b from-card/90 via-card/60 to-background/95 p-5 md:p-7 backdrop-blur-md shadow-2xl space-y-6">
            {/* Ambient Red Glows */}
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-red-500/10 blur-3xl pointer-events-none" />

            {/* Channel Banner & Identity Header */}
            <div className="relative rounded-xl overflow-hidden border border-border/60 bg-black/50 shadow-inner">
              {/* Banner Image */}
              <div className="relative h-28 sm:h-36 md:h-44 w-full overflow-hidden">
                <Image
                  src="/assets/youtube/banner.jpg"
                  alt="RageHitmanYT Channel Banner"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover object-center filter brightness-90 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
                <div className="absolute top-3 right-3 flex items-center gap-2">
                  <Badge className="bg-red-600/90 hover:bg-red-600 text-white border-0 font-mono text-[11px] px-2.5 py-1 gap-1.5 shadow-lg">
                    <Radio className="w-3.5 h-3.5 animate-pulse" />
                    LIVE CREATOR &amp; TESTER
                  </Badge>
                </div>
              </div>

              {/* Avatar & Channel Details Overlap */}
              <div className="p-4 sm:p-6 pt-0 relative flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 -mt-10 sm:-mt-12">
                <div className="flex items-end gap-3.5 sm:gap-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-red-500/80 shadow-2xl bg-black shrink-0 ring-4 ring-background">
                    <Image
                      src="/assets/youtube/avatar.jpg"
                      alt="RageHitmanYT Avatar"
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-0.5 sm:space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-xl sm:text-2xl font-black font-display tracking-tight text-foreground">
                        RageHitmanYT
                      </h4>
                      <Badge variant="outline" className="text-[11px] font-mono border-red-500/40 text-red-400 bg-red-500/10">
                        @ragehitmanyt
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground flex items-center gap-2.5 flex-wrap">
                      <span className="flex items-center gap-1 font-mono text-foreground font-semibold">
                        <Users className="w-3.5 h-3.5 text-red-500" /> 318+ Subscribers
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-mono text-foreground font-semibold">
                        <Play className="w-3.5 h-3.5 text-red-500 fill-current" /> 100+ Videos
                      </span>
                      <span>•</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <Image
                          src="/assets/keyboard/logos/steam.svg"
                          alt="Steam"
                          width={13}
                          height={13}
                          className="w-3 h-3 invert opacity-80"
                        />
                        Steam QA Tester
                      </span>
                    </p>
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  <Link
                    href="https://www.youtube.com/@ragehitmanyt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none"
                  >
                    <Button
                      size="sm"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold gap-2 shadow-lg shadow-red-600/30 transition-all hover:scale-105 active:scale-95"
                    >
                      <Youtube className="w-4 h-4 fill-current" />
                      Visit YouTube
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                  <Link
                    href="https://steamcommunity.com/id/ragehitmanyt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-sky-500/40 hover:border-sky-400 bg-sky-950/20 hover:bg-sky-900/40 text-foreground font-mono text-xs gap-1.5 transition-all justify-center"
                    >
                      <Image
                        src="/assets/keyboard/logos/steam.svg"
                        alt="Steam"
                        width={14}
                        height={14}
                        className="w-3.5 h-3.5 invert opacity-90"
                      />
                      Steam Profile
                      <ArrowUpRight className="w-3 h-3" />
                    </Button>
                  </Link>
                  <Link
                    href="https://discord.gg/subkE5r5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-border/70 hover:border-primary/50 text-foreground font-mono text-xs gap-1.5 justify-center"
                    >
                      Discord
                      <ArrowUpRight className="w-3 h-3" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Showcase Grid: Featured Stream & Testing Focus */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Left Column: Featured Video Showcase */}
              <div className="lg:col-span-7 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <Play className="w-3.5 h-3.5 text-red-500 fill-current" />
                    Featured Gameplay Stream
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground border border-border/60 px-2 py-0.5 rounded">
                    Valorant Live Stream
                  </span>
                </div>

                <Link
                  href="https://www.youtube.com/live/Wf9q_PTZgjk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-video w-full rounded-xl overflow-hidden border border-border/60 bg-black shadow-lg"
                >
                  <Image
                    src="/assets/youtube/valorant-stream.jpg"
                    alt="Radiant Dream, Silver Team! VALORANT Live Stream"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                  
                  {/* Central Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-red-600 transition-all ring-4 ring-white/10">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-white line-clamp-1 group-hover:text-red-400 transition-colors">
                        Radiant Dream, Silver Team! 😂 VALORANT Live Stream
                      </p>
                      <p className="text-xs text-white/70 font-mono truncate">
                        Live competitive gameplay, agent utility timing &amp; mechanics stress testing
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-[10px] bg-black/80 text-white shrink-0 font-mono">
                      Watch Stream
                    </Badge>
                  </div>
                </Link>
              </div>

              {/* Right Column: Testing Specializations & Secondary Clips */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <Gamepad2 className="w-3.5 h-3.5 text-primary" />
                  Game Testing &amp; Content Focus
                </span>

                <div className="space-y-2.5 flex-1 flex flex-col justify-between">
                  {/* Compact Most Played Genres & Games Card (PC & Mobile) */}
                  <div className="p-3 rounded-xl border border-red-500/30 bg-secondary/20 hover:border-red-500/50 transition-colors space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1 rounded-md bg-red-500/10 text-red-400">
                          <Gamepad2 className="w-3.5 h-3.5" />
                        </div>
                        <h5 className="text-xs font-bold text-foreground">
                          Most Played Genres &amp; Library
                        </h5>
                      </div>
                      <Badge
                        variant="outline"
                        className="text-[10px] font-mono border-red-500/40 text-red-400 bg-red-500/10 shrink-0 px-1.5 py-0"
                      >
                        PC &amp; Mobile
                      </Badge>
                    </div>

                    {/* Genres Chips */}
                    <div>
                      <span className="text-[10px] font-mono font-semibold text-muted-foreground block mb-1">
                        Top Genres:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {[
                          "FPS",
                          "Survival Adventure",
                          "RPG",
                          "Casual",
                          "Platformer",
                          "Battle Royale",
                        ].map((genre) => (
                          <span
                            key={genre}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-secondary/80 text-foreground/90 border border-border/50"
                          >
                            {genre}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Games Played Chips */}
                    <div className="pt-2 border-t border-border/30">
                      <span className="text-[10px] font-mono font-semibold text-muted-foreground block mb-1">
                        Games He Plays:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {[
                          "VALORANT",
                          "CS2",
                          "The Witcher 3: Wild Hunt",
                          "GTA 5",
                          "S.T.A.L.K.E.R. 2",
                          "The Last of Us Part 1",
                          "The Last of Us Part 2",
                          "Alan Wake",
                          "Alan Wake 2",
                          "Assassin's Creed Origins",
                          "Dakar Desert Rally",
                        ].map((game) => (
                          <span
                            key={game}
                            className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-background/70 text-foreground/80 border border-border/40 hover:border-red-500/40 hover:text-red-400 transition-colors"
                          >
                            {game}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Steam Playtest & QA Verification Card */}
                  <Link
                    href="https://steamcommunity.com/id/ragehitmanyt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-3 rounded-xl border border-sky-500/30 bg-gradient-to-br from-[#171a21]/95 via-[#1b2838]/85 to-secondary/30 hover:border-sky-400/60 transition-all shadow-md hover:shadow-sky-500/10"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-md bg-sky-500/15 text-sky-400">
                          <Image
                            src="/assets/keyboard/logos/steam.svg"
                            alt="Steam"
                            width={16}
                            height={16}
                            className="w-4 h-4 invert"
                          />
                        </div>
                        <h5 className="text-sm font-bold text-foreground group-hover:text-sky-300 transition-colors">
                          Steam Playtest &amp; Hardware QA
                        </h5>
                      </div>
                      <Badge variant="outline" className="text-[10px] font-mono border-sky-400/40 text-sky-400 bg-sky-500/10 shrink-0 gap-1">
                        steam/ragehitmanyt
                        <ArrowUpRight className="w-2.5 h-2.5" />
                      </Badge>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Testing pre-release PC builds via Steamworks beta branches, verifying Steam Input &amp; controller compatibility, and bench-testing frame-time consistency.
                    </p>
                  </Link>

                  {/* Secondary Clip Card */}
                  <Link
                    href="https://www.youtube.com/watch?v=QhDhhwCXWr4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-2.5 rounded-xl border border-border/50 bg-card/60 hover:border-red-500/40 transition-all hover:bg-card/90"
                  >
                    <div className="relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border border-border/40 bg-black">
                      <Image
                        src="/assets/youtube/valorant-featured.jpg"
                        alt="RIP ACE Valorant :)"
                        fill
                        sizes="80px"
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Play className="w-4 h-4 text-white fill-current" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-foreground group-hover:text-red-400 transition-colors truncate">
                        RIP ACE Valorant :)
                      </p>
                      <p className="text-[11px] text-muted-foreground line-clamp-1">
                        Clutch play &amp; weapon recoil reset analysis
                      </p>
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-red-400 mt-0.5">
                        Watch Short <ArrowUpRight className="w-2.5 h-2.5" />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
