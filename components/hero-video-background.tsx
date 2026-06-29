"use client";

import { useEffect, useRef, useState } from "react";

import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

export function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const markReady = () => setVideoReady(true);

    const tryPlay = () => {
      if (video.paused) {
        void video.play().catch(() => {
          // Autoplay can be deferred (tab background, policy). Keep video mounted.
        });
      }
    };

    const onVisibilityChange = () => {
      if (!document.hidden) tryPlay();
    };

    const onInteraction = () => {
      tryPlay();
    };

    video.addEventListener("loadeddata", markReady);
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("playing", markReady);
    document.addEventListener("visibilitychange", onVisibilityChange);
    document.addEventListener("pointerdown", onInteraction, { once: true });

    if (video.readyState >= 2) {
      markReady();
      tryPlay();
    }

    return () => {
      video.removeEventListener("loadeddata", markReady);
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("playing", markReady);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      document.removeEventListener("pointerdown", onInteraction);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-white">
      <video
        ref={videoRef}
        src={images.heroVideo}
        poster={images.hero}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={cn(
          "hero-video-layer h-full w-full object-cover transition-opacity duration-700",
          videoReady ? "opacity-100" : "opacity-95",
        )}
      />

      {/* Soft top fade so nav links stay readable over the video */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/55 to-transparent" />
      {/* Cinematic scrim — stronger on left/bottom, video visible top-right */}
      <div className="absolute inset-0 bg-gradient-to-t from-white from-0% via-white/70 via-35% to-transparent to-72%" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 from-0% via-white/30 via-40% to-transparent to-85%" />
      <div className="absolute inset-0 bg-primary/[0.04]" />
    </div>
  );
}
