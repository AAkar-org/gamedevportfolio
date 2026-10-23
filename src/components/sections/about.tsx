"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Brain,
  Layers,
  GraduationCap,
  Sparkles,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

              <div className="lg:col-span-5 relative aspect-video overflow-hidden rounded-xl border border-border shadow-md group bg-black/90">
                <Image
                  src="/assets/projects-screenshots/isla-sentinel/water-island.jpg"
                  alt="Surviving the Adventures of Isla Sentinel Environment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-contain transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 pointer-events-none">
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

      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
