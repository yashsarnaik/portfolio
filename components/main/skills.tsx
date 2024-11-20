import { SkillText } from "@/components/sub/skill-text";
import { SkillScrollRow } from "@/components/sub/skill-scroll-row";
import {
  BACKEND_SKILL,
  FRONTEND_SKILL,

  SKILL_DATA,
} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />
      
      <div className="w-full">
        <SkillScrollRow skills={SKILL_DATA} direction="left" speed={25} />
        <SkillScrollRow skills={FRONTEND_SKILL} direction="right" speed={20} />
        <SkillScrollRow skills={BACKEND_SKILL} direction="left" speed={30} />
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};