"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

export default function KidsBackground({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-sky-50 to-yellow-100 relative overflow-hidden">
      {/* Animated floating shapes */}
      <motion.div 
        className="absolute top-[-30px] left-[5%] w-24 h-24 bg-pink-200 rounded-full opacity-40 z-0"
        animate={{ 
          y: [0, 15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 5,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute top-[15%] right-[10%] w-16 h-16 bg-yellow-200 rounded-full opacity-30 z-0"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 6,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Cloud shapes */}
      <div className="absolute top-[10%] left-[20%] w-32 h-12 bg-white rounded-full opacity-50 shadow-sm z-0"></div>
      <div className="absolute top-[10%] left-[18%] w-24 h-14 bg-white rounded-full opacity-50 shadow-sm z-0"></div>
      <div className="absolute top-[10%] left-[22%] w-28 h-14 bg-white rounded-full opacity-50 shadow-sm z-0"></div>
      
      <div className="absolute top-[30%] right-[15%] w-28 h-10 bg-white rounded-full opacity-40 shadow-sm z-0"></div>
      <div className="absolute top-[30%] right-[13%] w-20 h-12 bg-white rounded-full opacity-40 shadow-sm z-0"></div>
      <div className="absolute top-[30%] right-[17%] w-24 h-12 bg-white rounded-full opacity-40 shadow-sm z-0"></div>
      
      {/* Rainbow arc */}
      <div className="absolute bottom-[-120px] left-[-100px] w-[400px] h-[400px] border-[30px] border-pink-300 rounded-full opacity-20 z-0"></div>
      <div className="absolute bottom-[-140px] left-[-120px] w-[440px] h-[440px] border-[30px] border-yellow-300 rounded-full opacity-20 z-0"></div>
      <div className="absolute bottom-[-160px] left-[-140px] w-[480px] h-[480px] border-[30px] border-blue-300 rounded-full opacity-20 z-0"></div>
      
      {/* Stars */}
      <motion.div 
        className="absolute top-[50%] right-[30%] text-yellow-400 text-2xl opacity-60 z-0"
        animate={{ 
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 3,
          ease: "easeInOut" 
        }}
      >
        ★
      </motion.div>
      
      <motion.div 
        className="absolute top-[25%] left-[40%] text-yellow-400 text-xl opacity-40 z-0"
        animate={{ 
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 4,
          ease: "easeInOut",
          delay: 2
        }}
      >
        ★
      </motion.div>
      
      {/* Large soft colored circles */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-200 rounded-full opacity-20 z-0"></div>
      <div className="absolute top-[60%] left-[-100px] w-[250px] h-[250px] bg-pink-200 rounded-full opacity-20 z-0"></div>
      
      {/* Content container */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
