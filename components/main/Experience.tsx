'use client';

import React from 'react';
import Image from 'next/image';

export const Experience = () => {
  return (
    <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8 pb-16">
      <h2 className="text-[40px] font-semibold text-white py-20 text-center mb-8">Experience</h2>
      <div className="flex justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-2xl">
            <div className="bg-amber-50 p-5 sm:p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-amber-100 text-amber-800 text-xs sm:text-sm px-2.5 py-1 rounded-full">
                  Sep 2024-present
                </span>
                <div className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg height={20} width={20} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" strokeLinejoin="round" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">AI/ML Developer 👨‍💻</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                I&apos;m working as an AI/ML developer creating some amazing Gen-ai apps using the state of the art LLMs and embedding models and creating APIs using apps like Flask and Fast-API. 
                And creating data-driven business solutions using Postgres and Firebase.
                With my Knowledge in AI/ML and Deep learning I&apos;m always up to contribute to the community.
              </p>
            </div>
            <div className="bg-gray-50 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between">
              <div className="flex items-center space-x-3 mb-3 sm:mb-0">
                <Image 
                  src="/onpoint.jpeg" 
                  alt="onPoint Software Services Logo" 
                  width={40} 
                  height={40} 
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm sm:text-base font-semibold text-gray-800">onPoint Software Services</p>
                </div>
              </div>
              <a 
                href="https://www.onpointsoft.com" 
                className="w-full sm:w-auto text-center bg-gray-800 text-white text-sm sm:text-base px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
