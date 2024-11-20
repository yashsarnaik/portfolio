"use client";
import React from 'react';
import Image from 'next/image';


type SkillData = {
  readonly skill_name: string;
  readonly image: string;
  readonly width: number;
  readonly height: number;
};

type SkillScrollRowProps = {
  skills: readonly SkillData[];
  direction?: 'left' | 'right';
  speed?: number;
};

const SkillItem = ({ image, skill_name, width, height }: SkillData) => {
  return (
    <div className="flex-shrink-0 px-4 sm:px-8">
      <div className="w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center">
        <Image 
          src={image}
          width={width} 
          height={height} 
          alt={skill_name}
          className="hover:scale-110 transition-transform duration-300 object-contain w-10 h-10 sm:w-auto sm:h-auto"
        />
      </div>
    </div>
  );
};

export const SkillScrollRow = ({ skills, direction = 'left' }: SkillScrollRowProps) => {
  return (
    <>
      <style jsx global>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .scroll-container {
          animation: scroll 10s linear infinite;
        }

        @media (min-width: 1024px) {
          .scroll-container {
            animation: scroll 15s linear infinite;
          }
        }

        .scroll-reverse {
          animation-direction: reverse;
        }
      `}</style>

      <div className="relative overflow-hidden py-4 bg-transparent">
        <div 
          className={`flex whitespace-nowrap scroll-container ${direction === 'right' ? 'scroll-reverse' : ''}`}
        >
          <div className="flex">
            {skills.map((skill, i) => (
              <SkillItem key={`${skill.skill_name}-${i}`} {...skill} />
            ))}
          </div>
          <div className="flex">
            {skills.map((skill, i) => (
              <SkillItem key={`${skill.skill_name}-duplicate-${i}`} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};