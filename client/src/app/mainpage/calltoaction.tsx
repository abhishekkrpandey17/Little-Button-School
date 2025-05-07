"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-16 my-8 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-pink-200/30"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, 15, 0],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-10 -right-10 w-60 h-60 rounded-full bg-blue-100/20"
        animate={{ 
          scale: [1, 0.9, 1],
          x: [0, -15, 0],
          y: [0, 10, 0],
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-pink-100 via-white to-pink-100 rounded-3xl shadow-lg py-12 px-8 md:px-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-pink-700 mb-4"
        >
          Begin Your Child&apos;s Journey With Us
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-gray-700 mb-10 max-w-2xl mx-auto"
        >
          At Little Button, we nurture young minds through play, creativity, and personalized care. 
          Join our community and give your child the foundation they deserve.
        </motion.p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-8">
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
          >
            <Link href="/visit">
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg transition">
                Book a Visit
              </button>
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
          >
            <Link href="/admission/process">
              <button className="w-full bg-transparent border-2 border-pink-500 text-pink-600 hover:bg-pink-50 font-bold py-3 px-8 rounded-full shadow-md text-lg transition">
                Apply Now
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
