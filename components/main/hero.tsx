// components/Hero.js
"use client";
import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <style jsx>{`
        @media (max-width: 1080px) {
          .video-mobile {
            top: -30%;
            left: 0;
            width: 100%;
            height: 100%;
            object-position: center;
        
          }
        }
      `}</style>
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20 video-mobile"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};