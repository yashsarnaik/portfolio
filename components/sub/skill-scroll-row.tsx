"use client";

import React from 'react';
import { motion } from 'framer-motion';
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

export const SkillScrollRow = ({ skills, direction = 'left', speed = 20 }: SkillScrollRowProps) => {
  const viewportWidth = window.innerWidth;
  const baseDuration = 15; // Base duration in seconds
  const duration = baseDuration * (viewportWidth / 1000) * (100 / speed);

  return (
    <div className="relative overflow-hidden py-4 bg-transparent">
      <motion.div 
        className="flex whitespace-nowrap"
        initial={{ x: direction === 'left' ? '0%' : '-100%' }}
        animate={{ x: direction === 'left' ? '-100%' : '0%' }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
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
      </motion.div>
    </div>
  );
};