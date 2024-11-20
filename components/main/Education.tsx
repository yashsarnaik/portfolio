'use client'

import { GraduationCap, School } from 'lucide-react'
import { motion } from "framer-motion"

export const Education = () => {
  return (
    <div id="education" className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Title */}
          <h2 className="text-6xl font-bold text-center text-gray-100 mb-12 py-8">Education</h2>

          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-5/6 w-0.5 bg-gray-700"></div>

          {/* Education Entry */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-24"
          >
            <div className="flex items-center">
              <div className="w-1/2 pr-8">
                <motion.div 
                  className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-white"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-bold">B.Tech in Computer Science(Data Science)</h3>
                  <p className="text-lg mt-1">Dr.D.Y Patil Pratishthan's College of Engineering, Kolhapur</p>
                  <p className="mt-4 text-gray-300 leading-relaxed">
                  I have successfully completed a B.Tech in Computer Science with a specialization in Data Science, equipping me with a strong foundation in programming, data analysis, and advanced algorithms. Through my academic journey, I developed expertise in Python, R, machine learning, deep learning, and visualization tools.
                  </p>
                </motion.div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <motion.div 
                  className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <GraduationCap className="w-6 h-6 text-white" />
                </motion.div>
              </div>
              <div className="w-1/2 pl-8 flex items-center">
                <motion.div 
                  className="bg-blue-500 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="text-blue-200 font-semibold">Feb 2021 - May 2024 </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Experience Entry */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="flex items-center">
              <div className="w-1/2 pr-8 flex justify-end">
                <motion.div 
                  className="bg-blue-500 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="text-blue-200 font-semibold">July 2018 -May 2024 </p>
                </motion.div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <motion.div 
                  className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <School  className="w-6 h-6 text-white" />
                </motion.div>
              </div>
              <div className="w-1/2 pl-8">
                <motion.div 
                  className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-white"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-bold">12th HSC</h3>
                  <p className="text-lg mt-1">
                    <span className="font-semibold">Kolhapur High School and Junior College,</span> Kolhapur
                  </p>
                  <p className="mt-4 text-gray-300 leading-relaxed">
                  I completed my 12th HSC in Science from Kolhapur high school and junior college, where I built a strong foundation in subjects like Physics, Chemistry, Mathematics, and Biology. This academic background provided me with analytical and problem-solving skills, which have been instrumental in my journey toward a career in technology 
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

import React from 'react';

const Card = () => {
  return (
    <aside className="bg-black text-white p-6 rounded-lg w-full max-w-md font-mono">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 text-red-500">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <p className="text-sm">bash</p>
      </div>
      <div className="mt-4">
        <p className="text-green-400">$ npm install uiverse</p>
        <p className="text-white">+ uiverse@1.0.0</p>
        <p className="text-white">added 1 package, and audited 2 packages in 3s</p>
        <p className="text-green-400">$</p>
      </div>
    </aside>
  );
}

export default Card;
