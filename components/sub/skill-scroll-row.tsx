"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type SkillDataProviderProps = {
  readonly image: string;
  readonly skill_name: string;
  readonly width: number;
  readonly height: number;
  readonly index: number;
};

type SkillScrollRowProps = {
  skills: readonly SkillDataProviderProps[];  // Updated to accept readonly array
  direction?: 'left' | 'right';
  speed?: number;
};

const SkillItem = ({ image, skill_name, width, height }: SkillDataProviderProps) => {
  return (
    <div className="flex-shrink-0 px-8">
      <div className="w-20 h-20 flex items-center justify-center">
        <Image 
          src={image}
          width={width} 
          height={height} 
          alt={skill_name}
          className="hover:scale-110 transition-transform duration-300 object-contain"
        />
      </div>
    </div>
  );
};

export const SkillScrollRow = ({ skills, direction = 'left', speed = 20 }: SkillScrollRowProps) => {
  const duration = 15 * (100 / speed);
  
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
            <SkillItem key={`${skill.skill_name}-${i}`} {...skill} index={i} />
          ))}
        </div>
        <div className="flex">
          {skills.map((skill, i) => (
            <SkillItem key={`${skill.skill_name}-duplicate-${i}`} {...skill} index={i} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};