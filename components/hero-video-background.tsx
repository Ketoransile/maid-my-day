"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

export function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  const revealVideo = useCallback(() => {
    setShowVideo(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      if (video.paused) {
        void video.play().catch(() => {
          // Autoplay can be deferred until tab is focused or user interacts.
        });
      }
    };

    const onVisibilityChange = () => {
      if (!document.hidden) tryPlay();
    };

    const onInteraction = () => {
      tryPlay();
    };

    const onPlaying = () => {
      revealVideo();
    };

    const onTimeUpdate = () => {
      if (video.currentTime > 0) {
        revealVideo();
        video.removeEventListener("timeupdate", onTimeUpdate);
      }
    };

    video.addEventListener("playing", onPlaying);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("canplay", tryPlay);
    document.addEventListener("visibilitychange", onVisibilityChange);
    document.addEventListener("pointerdown", onInteraction, { once: true });

    if (video.readyState >= 3) {
      tryPlay();
    }

    return () => {
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      document.removeEventListener("pointerdown", onInteraction);
    };
  }, [revealVideo]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-white">
      {/* Poster — visible until the first video frame plays */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={images.hero}
        alt=""
        className={cn(
          "hero-poster-layer absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out",
          showVideo ? "opacity-0" : "opacity-100",
        )}
      />

      <video
        ref={videoRef}
        src={images.heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={cn(
          "hero-video-layer absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out",
          showVideo ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Soft top fade so nav links stay readable over the video */}
      <div className="absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-white/55 to-transparent" />
      {/* Cinematic scrim — stronger on left/bottom, video visible top-right */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-white from-0% via-white/70 via-35% to-transparent to-72%" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/80 from-0% via-white/30 via-40% to-transparent to-85%" />
      <div className="absolute inset-0 z-10 bg-primary/[0.04]" />
    </div>
  );
}
