'use client'

import { GraduationCap, School } from 'lucide-react'
import { motion } from "framer-motion"

export const Education = () => {
  return (
    <div id="education" className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl text-white font-medium text-center mb-8">Education</h2>
        
        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>
          
          {/* College Education */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-16 flex items-center"
          >
            <div className="w-1/2 pr-8 text-right">
              <motion.div 
                className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-white"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-bold">B.Tech in Computer Science(Data Science)</h3>
                <p className="text-lg mt-1">Dr.D.Y Patil Pratishthan's College of Engineering, Kolhapur</p>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  I have successfully completed a B.Tech in Computer Science with a specialization in Data Science, equipping me with a strong foundation in programming, data analysis, and advanced algorithms.
                </p>
              </motion.div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <motion.div 
                className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                <GraduationCap className="w-6 h-6 text-white" />
              </motion.div>
            </div>
            <div className="w-1/2 pl-8">
              <motion.div 
                className="bg-blue-500 px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-blue-200 font-semibold">Feb 2021 - May 2024</p>
              </motion.div>
            </div>
          </motion.div>

          {/* High School Education */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex items-center"
          >
            <div className="w-1/2 pr-8">
              <motion.div 
                className="bg-blue-500 px-4 py-2 rounded-full text-right"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-blue-200 font-semibold">July 2018 - May 2024</p>
              </motion.div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <motion.div 
                className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                <School className="w-6 h-6 text-white" />
              </motion.div>
            </div>
            <div className="w-1/2 pl-8">
              <motion.div 
                className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-white"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-bold">12th HSC</h3>
                <p className="text-lg mt-1">
                  <span className="font-semibold">Kolhapur High School and Junior College,</span> Kolhapur
                </p>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  I completed my 12th HSC in Science, building a strong foundation in subjects like Physics, Chemistry, Mathematics, and Biology.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-6">
          {/* College Education Mobile */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-5 rounded-lg">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-white">B.Tech in Computer Science</h3>
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                Feb 2021 - May 2024
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Dr.D.Y Patil Pratishthan &apos; College of Engineering, Kolhapur
            </p>
            <p className="mt-2 text-gray-400 text-xs">
              Completed B.Tech in Computer Science with Data Science specialization, developing expertise in programming, data analysis, and machine learning.
            </p>
          </div>

          {/* High School Education Mobile */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-5 rounded-lg">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-white">12th HSC</h3>
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                July 2018 - May 2024
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Kolhapur High School and Junior College, Kolhapur
            </p>
            <p className="mt-2 text-gray-400 text-xs">
              Completed 12th HSC in Science, building strong analytical and problem-solving skills in Physics, Chemistry, Mathematics, and Biology.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education;