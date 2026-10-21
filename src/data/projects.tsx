import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import {
  ArrowUpRight,
  Brain,
  Code2,
  Compass,
  Cpu,
  FileText,
  Gamepad2,
  GitBranch,
  Layers,
  Monitor,
  Play,
  Smartphone,
  Sparkles,
  Swords,
  Tv,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({
  live,
  repo,
  label = "Watch Gameplay Video",
}: {
  live?: string;
  repo?: string;
  label?: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-4 mb-6">
      {live && live !== "#" && (
        <Link
          className="font-mono flex gap-2"
          rel="noopener noreferrer"
          target="_blank"
          href={live}
        >
          <Button variant={"default"} size={"sm"} className="gap-2">
            <Play className="w-4 h-4 fill-current" />
            {label}
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono flex gap-2"
          rel="noopener noreferrer"
          target="_blank"
          href={repo}
        >
          <Button variant={"outline"} size={"sm"} className="gap-2">
            <GitBranch className="w-4 h-4" />
            GitHub Repository
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const makeSkill = (title: string, icon: ReactNode): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon,
});

export const PROJECT_SKILLS = {
  unreal: makeSkill("Unreal Engine 5.6", <Gamepad2 className="w-4 h-4" />),
  unity: makeSkill("Unity (2D & 3D)", <Gamepad2 className="w-4 h-4" />),
  csharp: makeSkill("C# Programming", <Code2 className="w-4 h-4" />),
  cpp: makeSkill("C++", <Code2 className="w-4 h-4" />),
  blueprints: makeSkill("UE Blueprints", <Layers className="w-4 h-4" />),
  behaviorTrees: makeSkill("Behavior Trees & AI", <Brain className="w-4 h-4" />),
  navmesh: makeSkill("NavMesh & Waypoints", <Compass className="w-4 h-4" />),
  gdd: makeSkill("Game Design (GDD)", <FileText className="w-4 h-4" />),
  ui: makeSkill("Health UI & HUD", <Sparkles className="w-4 h-4" />),
  combat: makeSkill("Melee Combat Systems", <Swords className="w-4 h-4" />),
  steam: makeSkill("Steam / PC Platform", <Monitor className="w-4 h-4" />),
  playstation: makeSkill("PlayStation", <Tv className="w-4 h-4" />),
  xbox: makeSkill("Xbox", <Gamepad2 className="w-4 h-4" />),
  mobile: makeSkill("Mobile (Android & iOS)", <Smartphone className="w-4 h-4" />),
  vr: makeSkill("VR / XR Architecture", <Cpu className="w-4 h-4" />),
  git: makeSkill("Git / Version Control", <GitBranch className="w-4 h-4" />),
  physics: makeSkill("Physics & Kinematics", <Compass className="w-4 h-4" />),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "isla-sentinel",
    category: "Unreal Engine 5 • Major Project",
    title: "Surviving the Adventures of Isla Sentinel",
    src: `${BASE_PATH}/isla-sentinel/water-island.jpg`,
    screenshots: ["water-island.jpg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.unreal,
        PROJECT_SKILLS.blueprints,
        PROJECT_SKILLS.cpp,
      ],
      backend: [
        PROJECT_SKILLS.behaviorTrees,
        PROJECT_SKILLS.navmesh,
        PROJECT_SKILLS.steam,
        PROJECT_SKILLS.playstation,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div className="space-y-6">

          <TypographyH3 className="my-4 mt-8">Core Gameplay Systems</TypographyH3>
          <ul className="list-disc list-outside ml-6 space-y-2 font-mono text-sm text-muted-foreground">
            <li>
              <strong className="text-foreground">Atmospheric World Architecture:</strong> Built with Unreal Engine 5 real-time dynamic global illumination (Lumen) and high-density geometric detail (Nanite).
            </li>
            <li>
              <strong className="text-foreground">Adaptive Adversary AI:</strong> Custom Behavior Trees coordinating patrol routines, dynamic perception cones, and aggressive territory-defense behavior.
            </li>
            <li>
              <strong className="text-foreground">Environmental Puzzles &amp; Traversal:</strong> Ruined stone causeways, glowing rune circles, floating pathways, and physics-driven environmental obstacles.
            </li>
            <li>
              <strong className="text-foreground">Survival Loop:</strong> Resource harvesting, equipment crafting, health progress monitors, and stamina management under extreme conditions.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "ue-enemy-ai",
    category: "Unreal Engine 5.6 • AI & Gameplay",
    title: "Enemy AI Patrolling & Chase System",
    src: `${BASE_PATH}/ue-enemy-ai/thumbnail.jpg`,
    screenshots: ["thumbnail.jpg", "env.jpg", "platform.jpg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.unreal,
        PROJECT_SKILLS.blueprints,
        PROJECT_SKILLS.cpp,
      ],
      backend: [
        PROJECT_SKILLS.behaviorTrees,
        PROJECT_SKILLS.navmesh,
        PROJECT_SKILLS.physics,
      ],
    },
    live: "https://youtu.be/AARc-Z0MURY",
    github: "#",
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-xl font-bold">
            Autonomous Enemy AI with Cyclic Patrolling and Player Detection in Unreal Engine 5.6
          </TypographyP>
          <TypographyP className="font-mono leading-relaxed">
            Engineered an autonomous enemy AI system in Unreal Engine 5.6 utilizing Blueprints, Behavior Trees, and custom AI Controllers. The system drives intelligent NPC behaviors that dynamically alternate between patrol routines, suspicion checks, and full pursuit based on player proximity and sight perception.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} label="Watch Gameplay Demonstration" />

          {/* Embedded YouTube Showcase */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-border my-6 shadow-md bg-black">
            <iframe
              src="https://www.youtube.com/embed/AARc-Z0MURY"
              title="Enemy AI Patrolling and Enemy-Player Chase System in Unreal Engine"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          <SlideShow
            images={[
              `${BASE_PATH}/ue-enemy-ai/thumbnail.jpg`,
              `${BASE_PATH}/ue-enemy-ai/env.jpg`,
              `${BASE_PATH}/ue-enemy-ai/platform.jpg`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Technical Implementation</TypographyH3>
          <ul className="list-disc list-outside ml-6 space-y-2 font-mono text-sm text-muted-foreground">
            <li>
              <strong className="text-foreground">Cyclic NPC Patrolling:</strong> Implemented sequential and loop patrol point traversal using blueprints and ingame AI systems .
            </li>
            <li>
              <strong className="text-foreground">Player Detection &amp; Chase Radius:</strong> Developed chase AI system.
            </li>
            <li>
              <strong className="text-foreground">Blackboard &amp; Behavior Tree Tasks:</strong> Synchronized target vectors, speed modifiers, and search states across Blackboard keys and decorator logic.
            </li>
            <li>
              <strong className="text-foreground">Role:</strong> Developer and Tester — responsible for complete architecture, debugging, collision bounds, and movement smoothing.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "ue-survival",
    category: "Unreal Engine 5.6 • Combat & Mechanics",
    title: "Survival Game Prototype",
    src: `${BASE_PATH}/ue-survival/thumbnail.jpg`,
    screenshots: ["thumbnail.jpg", "combat.jpg", "locomotion.jpg", "hud.jpg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.unreal,
        PROJECT_SKILLS.blueprints,
      ],
      backend: [
        PROJECT_SKILLS.combat,
        PROJECT_SKILLS.ui,
        PROJECT_SKILLS.physics,
      ],
    },
    live: "https://youtu.be/gvm_I5BbXRM",
    github: "#",
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-xl font-bold">
            Third-Person Survival Adventure with Enemy Chase &amp; Axe Attack Combat
          </TypographyP>
          <TypographyP className="font-mono leading-relaxed">
            Developed a comprehensive Survival Adventure game prototype in Unreal Engine 5.6. Built third-person locomotion, aggressive enemy pursuit AI with melee axe attacks, and an interactive player health system with real-time UI progress feedback.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} label="Watch on YouTube" />

          {/* Compressed Complete Gameplay Video Capture */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-foreground flex items-center gap-2">
                <Play className="w-3.5 h-3.5 text-primary fill-current" />
                Complete Gameplay: Enemy Pursuit &amp; Axe Combat
              </span>
              <span className="text-[10px] font-mono text-muted-foreground border border-border px-2 py-0.5 rounded">
                1080p • 30 FPS • 0:30
              </span>
            </div>
            <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-border shadow-lg bg-black">
              <video
                controls
                playsInline
                preload="metadata"
                poster={`${BASE_PATH}/ue-survival/thumbnail.jpg`}
                className="w-full h-full object-contain"
              >
                <source
                  src={`${BASE_PATH}/ue-survival/gameplay.mp4`}
                  type="video/mp4"
                />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>

          {/* Compressed Prototype Intro Video */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-foreground flex items-center gap-2">
                <Play className="w-3.5 h-3.5 text-primary fill-current" />
                Intro Showcase: Survival Adventure Game Prototype
              </span>
              <span className="text-[10px] font-mono text-muted-foreground border border-border px-2 py-0.5 rounded">
                1080p • 24 FPS • 0:10
              </span>
            </div>
            <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-border shadow-lg bg-black">
              <video
                controls
                playsInline
                preload="metadata"
                poster={`${BASE_PATH}/ue-survival/combat.jpg`}
                className="w-full h-full object-contain"
              >
                <source
                  src={`${BASE_PATH}/ue-survival/intro.mp4`}
                  type="video/mp4"
                />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>

          <SlideShow
            images={[
              `${BASE_PATH}/ue-survival/thumbnail.jpg`,
              `${BASE_PATH}/ue-survival/combat.jpg`,
              `${BASE_PATH}/ue-survival/locomotion.jpg`,
              `${BASE_PATH}/ue-survival/hud.jpg`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Gameplay &amp; Systems Architecture</TypographyH3>
          <ul className="list-disc list-outside ml-6 space-y-2 font-mono text-sm text-muted-foreground">
            <li>
              <strong className="text-foreground">Enemy Melee Combat:</strong> Engineered enemy chase mechanics and axe-based attack animations with weapon collision trace detection.
            </li>
            <li>
              <strong className="text-foreground">Health System &amp; UI Progress Bar:</strong> Designed real-time player health data models connected to a dynamic UMG HUD health bar with damage flash indicators.
            </li>
            <li>
              <strong className="text-foreground">Locomotion &amp; Collision:</strong> Integrated third-person character movement, obstacle navigation and hit reaction montages.
            </li>
            <li>
              <strong className="text-foreground">Role:</strong> Developer and Tester — developed core mechanics, combat balancing, and user interface from prototype to playable demo.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "unity-platformer",
    category: "Unity • 2D Platformer",
    title: "2D Platformer Game Designer and Tester",
    src: `${BASE_PATH}/unity-platformer/thumbnail.jpg`,
    screenshots: ["grappling.jpg", "platforming.jpg", "acid-traversal.jpg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.unity,
        PROJECT_SKILLS.csharp,
      ],
      backend: [
        PROJECT_SKILLS.gdd,
        PROJECT_SKILLS.physics,
        PROJECT_SKILLS.git,
      ],
    },
    live: "https://youtu.be/xt8RpL5wDYg",
    github: "#",
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-xl font-bold">
            High-Precision 2D Platformer with GDD-Driven Mechanics &amp; Cross-Team Testing
          </TypographyP>
          <TypographyP className="font-mono leading-relaxed">
            Designed and tested an engaging 2D Platformer game in Unity. Authored Game Design Documentations (GDD) to establish core jump arcs, physics damping, hazard timings, and level progression curves, then implemented and verified each mechanic in C#.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} label="Watch on YouTube" />

          {/* Compressed In-Engine Gameplay Recording */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-foreground flex items-center gap-2">
                <Play className="w-3.5 h-3.5 text-primary fill-current" />
                Raw Gameplay Capture: Grapple Locomotion &amp; Traversal
              </span>
              <span className="text-[10px] font-mono text-muted-foreground border border-border px-2 py-0.5 rounded">
                60 FPS • 1920x1200
              </span>
            </div>
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-border shadow-lg bg-black">
              <video
                controls
                playsInline
                preload="metadata"
                poster={`${BASE_PATH}/unity-platformer/grappling.jpg`}
                className="w-full h-full object-contain"
              >
                <source
                  src={`${BASE_PATH}/unity-platformer/gameplay.mp4`}
                  type="video/mp4"
                />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>

          <SlideShow
            images={[
              `${BASE_PATH}/unity-platformer/grappling.jpg`,
              `${BASE_PATH}/unity-platformer/platforming.jpg`,
              `${BASE_PATH}/unity-platformer/acid-traversal.jpg`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Design &amp; Testing Highlights</TypographyH3>
          <ul className="list-disc list-outside ml-6 space-y-2 font-mono text-sm text-muted-foreground">
            <li>
              <strong className="text-foreground">GDD-Led Mechanics:</strong> Authored detailed Game Design Documents specifying jump apex, coyote time, jump buffering, and responsive platform locomotion.
            </li>
            <li>
              <strong className="text-foreground">Grappling &amp; Traversal Physics:</strong> Engineered dynamic tether mechanics allowing players to latch onto crystal anchors and launch across hazardous chasms.
            </li>
            <li>
              <strong className="text-foreground">System Testing &amp; Bug Fixing:</strong> Tested and debugged edge-case collision behaviors, moving platforms, and collectible detection to ensure smooth 60 FPS gameplay.
            </li>
            <li>
              <strong className="text-foreground">Cross-Disciplinary Collaboration:</strong> Partnered with concept artists, sprite animators, and sound designers to implement audio triggers and visual polish.
            </li>
            <li>
              <strong className="text-foreground">Role:</strong> Game Designer and Tester — gameplay mechanics design, playtesting feedback loops, and quality assurance.
            </li>
          </ul>
        </div>
      );
    },
  },
];

export default projects;
