"use client";

import { memo, useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { setConsoleFunction } from "three";
import { ChibiScene, type ChibiSceneApi, type ScenePointerEvent, type RuntimeEvent } from "@chibi3d/runtime";

if (typeof window !== "undefined") {
  setConsoleFunction((type, message, ...params) => {
    if (type === "warn" && typeof message === "string" && message.includes("Clock: This module has been deprecated")) {
      return;
    }
    console[type](message, ...params);
  });

  const origWarn = console.warn;
  console.warn = (...args: unknown[]) => {
    const msg = args.map((a) => (typeof a === "string" ? a : "")).join(" ");
    if (msg.includes("Clock: This module has been deprecated") || msg.includes("THREE.Clock")) return;
    return origWarn.apply(console, args);
  };
}
import { SKILLS } from "@/data/constants";
import { useTheme } from "next-themes";
import { setSceneStatus } from "@/lib/scene-health";
import { usePreloader } from "../preloader";
import { createKeyboardScene, resolveKeyboardAsset, type KeyboardSkill } from "./scene";
import { createKeyInput, isTypingTarget } from "./input";
import { createKeyboardMotion, type KeyboardSection } from "./motion";
import { useKeyboardSounds } from "./use-keyboard-sounds";
import { useAdaptiveGraphics } from "./use-adaptive-graphics";

const SceneCanvas = memo(ChibiScene);
const SCENE_STYLE: CSSProperties = {
  position: "fixed",
  inset: 0,
  width: "100vw",
  height: "100dvh",
};

export default function KeyboardScene({ maxDpr }: { maxDpr: number }) {
  const { isLoading, bypassLoading } = usePreloader();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";
  const api = useRef<ChibiSceneApi>(null);
  const failed = useRef(false);
  const motion = useRef<ReturnType<typeof createKeyboardMotion> | null>(null);
  const [loadVersion, setLoadVersion] = useState(0);
  const ready = loadVersion > 0;
  const [section, setSection] = useState<KeyboardSection>("hero");
  const [selected, setSelected] = useState<KeyboardSkill | null>(null);
  const playSound = useKeyboardSounds();
  const scene = useMemo(() => createKeyboardScene(Object.values(SKILLS).map((skill) => ({
    ...skill, icon: skill.keyboardIcon ?? skill.icon,
  })), 6, isDark), [isDark]);
  const { settings: graphics, markActive } = useAdaptiveGraphics(ready && !isLoading);
  const { shadows, softShadows, lighting } = graphics;
  const environment = useMemo(() => ({
    ...scene.document.environment,
    shadows, softShadows,
    ao: false,
    bloom: false,
    contactShadows: false,
    vignette: false,
    preset: lighting ? scene.document.environment.preset : null,
  }), [scene, shadows, softShadows, lighting]);
  const dpr = useMemo<[number, number]>(() =>
    [0.5, Math.min(graphics.dpr, maxDpr)], [maxDpr, graphics.dpr]);
  const selectedSkillName = useRef<string | null>(null);
  const input = useMemo(() => createKeyInput(scene.keys), [scene]);
  useEffect(() => input.subscribe((key, pressed) => {
    markActive();
    api.current?.transitionNodeTo(key.nodeId, pressed ? key.pressedStateId : "base", { duration: 0.1, ease: "easeInOut" });
    api.current?.setMaterial(key.materialId, {
      emissive: scene.document.materials[key.materialId].color,
      emissiveIntensity: pressed ? 0.7 : 0,
    });
    if (pressed) {
      selectedSkillName.current = key.skill.name;
      api.current?.setNodeVisible(scene.defaultLabelId, false);
      for (const k of scene.keys) {
        api.current?.setNodeVisible(k.labelId, k.labelId === key.labelId);
      }
      setSelected(key.skill);
    }
    playSound(pressed);
  }), [input, scene, playSound, markActive]);

  const onPointerEvent = useCallback((event: ScenePointerEvent) => {
    const pointer = `pointer:${event.pointerId}`;
    switch (event.type) {
      case "hoverEnter":
        if (event.pointerType === "mouse") input.press("hover", event.nodeId);
        break;
      case "hoverExit": input.release("hover", event.nodeId); break;
      case "pointerDown": input.press(pointer, event.nodeId); break;
      case "pointerUp":
      case "pointerCancel": input.release(pointer); break;
    }
  }, [input]);
  const onLoad = useCallback(() => {
    if (failed.current) return;
    setLoadVersion((version) => version + 1);
    setSceneStatus("ready");
    bypassLoading();
  }, [bypassLoading]);
  const onError = useCallback((error: Error) => {
    failed.current = true;
    console.warn("Keyboard scene unavailable", error);
    setSceneStatus("failed");
    bypassLoading();
  }, [bypassLoading]);
  const onEvent = useCallback((event: RuntimeEvent) => {
    if (event.type === "contextLost") onError(new Error("WebGL context lost"));
  }, [onError]);

  useEffect(() => {
    if (!ready || !api.current) return;
    const controller = createKeyboardMotion(api.current, scene, (next) => {
      setSection(next);
      input.releaseAll();
      const hash = next === "hero" ? "" : `#${next}`;
      window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search + hash);
    }, markActive);
    motion.current = controller;
    return () => { controller.dispose(); motion.current = null; };
  }, [ready, loadVersion, scene, input, markActive]);
  // Rebind after each runtime load, once the replacement scene's nodes are mounted.
  useEffect(() => {
    if (ready && !isLoading) motion.current?.reveal();
  }, [ready, loadVersion, isLoading, scene, input]);

  useEffect(() => {
    if (!ready) return;
    const targetLabelId = selectedSkillName.current
      ? scene.keys.find((k) => k.skill.name === selectedSkillName.current)?.labelId ?? scene.defaultLabelId
      : scene.defaultLabelId;
    for (const id of [scene.defaultLabelId, ...scene.keys.map((key) => key.labelId)]) {
      api.current?.setNodeVisible(id, id === targetLabelId);
    }
  }, [ready, loadVersion, scene]);

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.repeat || event.ctrlKey || event.metaKey || event.altKey || isTypingTarget(event.target)) return;
      const key = input.shortcuts.get(event.code);
      if (key) input.press(`key:${event.code}`, key.nodeId);
    };
    const up = (event: KeyboardEvent) => input.release(`key:${event.code}`);
    const release = () => input.releaseAll();
    const visibility = () => { if (document.hidden) release(); };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    window.addEventListener("blur", release);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      window.removeEventListener("blur", release);
      document.removeEventListener("visibilitychange", visibility);
      release();
    };
  }, [input]);

  return (
    <>
      <SceneCanvas
        key={isDark ? "dark" : "light"}
        document={scene.document}
        environment={environment}
        resolveAsset={resolveKeyboardAsset}
        api={api}
        style={SCENE_STYLE}
        dpr={dpr}
        transparent
        orbit={false}
        orthographic
        pointerTargets={scene.pointerTargets}
        onPointerEvent={onPointerEvent}
        onLoad={onLoad}
        onError={onError}
        onEvent={onEvent}
      />
      {section === "skills" && ready && (
        <div className="pointer-events-none fixed inset-x-4 bottom-8 text-center text-foreground">
          <div aria-live="polite" className="sr-only">
            <p className="text-xl font-semibold">{selected?.label ?? "Explore my skills"}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {selected?.shortDescription ?? "Hover, tap, or press a letter key"}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
