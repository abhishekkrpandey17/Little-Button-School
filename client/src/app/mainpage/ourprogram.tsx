"use client";
import React from "react";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Playgroup",
    description: "A nurturing environment for toddlers to explore and develop basic social skills through play.",
    emoji: "🧸"
  },
  {
    title: "Nursery",
    description: "Early childhood education focusing on foundational learning and motor skills development.",
    emoji: "🌼"
  },
  {
    title: "Kindergarten",
    description: "Preparing children for school with structured learning, creativity, and social interaction.",
    emoji: "🎨"
  }
];

export default function OurPrograms() {
  return (
    <section className="bg-gradient-to-r from-yellow-200 via-pink-100 to-blue-100 py-12 px-6 rounded-lg shadow-lg max-w-7xl mx-auto my-12">
      <h2 className="text-3xl font-extrabold text-center text-pink-700 mb-8">Our Programs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <motion.div
            key={program.title}
            initial={{ y: 50, opacity: 0, scale: 0.8 }}
            whileInView={{
              y: 0,
              opacity: 1,
              scale: 1,
              transition: { type: "spring", stiffness: 200, delay: index * 0.2 }
            }}
            whileHover={{
              scale: 1.05,
              rotate: [0, -3, 3, -3, 0],
              transition: { type: "spring", duration: 0.6 }
            }}
            className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <motion.div
              whileHover={{
                scale: [1, 1.2, 0.95, 1.1, 1],
                rotate: [0, 10, -10, 5, 0],
                transition: { duration: 0.7 }
              }}
              className="text-7xl mb-4 drop-shadow-lg"
              aria-hidden="true"
            >
              {program.emoji}
            </motion.div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">{program.title}</h3>
            <p className="text-gray-700 text-sm">{program.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
