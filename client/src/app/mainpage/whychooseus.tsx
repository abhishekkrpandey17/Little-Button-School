"use client";
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🤗",
    title: "Caring Staff",
    desc: "Our dedicated and loving staff ensure every child feels valued and supported.",
    color: "from-pink-200 to-pink-100",
  },
  {
    icon: "🛡️",
    title: "Safe Environment",
    desc: "We provide a secure and nurturing space where children can explore and grow safely.",
    color: "from-yellow-100 to-yellow-50",
  },
  {
    icon: "🎨",
    title: "Activity-Based Learning",
    desc: "Engaging activities designed to foster creativity, curiosity, and hands-on learning.",
    color: "from-blue-100 to-blue-50",
  },
  {
    icon: "📚",
    title: "Early Literacy",
    desc: "Encouraging reading and language skills through fun and interactive storytelling.",
    color: "from-green-200 to-green-100",
  },
  {
    icon: "🤸‍♂️",
    title: "Physical Development",
    desc: "Promoting motor skills and healthy habits with engaging physical activities.",
    color: "from-purple-200 to-purple-100",
  },
  {
    icon: "🌱",
    title: "Nature Exploration",
    desc: "Connecting children with nature through outdoor learning and gardening activities.",
    color: "from-teal-200 to-teal-100",
  },
];

export default function Whychooseus() {
  return (
    <section className="bg-gradient-to-r from-yellow-200 via-pink-100 to-blue-100 py-12 px-6 rounded-lg shadow-lg max-w-7xl mx-auto my-12">
      <h2 className="text-3xl font-extrabold text-center text-pink-700 mb-8">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ y: 60, opacity: 0, scale: 0.8 }}
            whileInView={{
              y: 0,
              opacity: 1,
              scale: 1,
              transition: { type: "spring", stiffness: 200, delay: i * 0.12 },
            }}
            viewport={{ once: true, amount: 0.3 }}   
            whileHover={{
              scale: 1.08,
              rotate: [0, -5, 5, -5, 0],
              transition: { type: "spring", duration: 0.6 },
            }}
            className={`flex flex-col items-center text-center p-6 bg-gradient-to-br ${f.color} rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer`}
          >
            <motion.div
              whileHover={{
                scale: [1, 1.2, 0.95, 1.1, 1],
                rotate: [0, 10, -10, 5, 0],
                transition: { duration: 0.7 },
              }}
              className="text-6xl mb-4 drop-shadow-lg"
              aria-hidden="false"
            >
              {f.icon}
            </motion.div>
            <h3 className="text-lg font-bold text-blue-900 mb-2">{f.title}</h3>
            <p className="text-gray-700 text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
