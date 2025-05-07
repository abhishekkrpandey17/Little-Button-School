"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Baby,
  Flower,
  Palette,
  CalendarCheck,
  GraduationCap,
  BookUser,
} from "lucide-react";

const programs = [
  {
    icon: <Baby className="w-10 h-10 text-pink-500" />,
    title: "Playgroup",
    desc: "Exploration and play to develop basic social and emotional skills.",
  },
  {
    icon: <Flower className="w-10 h-10 text-blue-500" />,
    title: "Nursery",
    desc: "Foundational education with activities to build motor and language skills.",
  },
  {
    icon: <Palette className="w-10 h-10 text-yellow-500" />,
    title: "Kindergarten",
    desc: "Structured learning focused on creativity, numeracy, and literacy.",
  },
  {
    icon: <CalendarCheck className="w-10 h-10 text-purple-500" />,
    title: "Daycare",
    desc: "A safe and caring environment while you’re at work.",
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-green-500" />,
    title: "Prep School",
    desc: "Focused preparation for transition into primary education.",
  },
  {
    icon: <BookUser className="w-10 h-10 text-orange-500" />,
    title: "Activity Hub",
    desc: "After-school creative and physical activity programs.",
  },
];

const AnimatedProgramCard = ({
  icon,
  title,
  desc,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-30%" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    } else {
      controls.start({ y: 50, opacity: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        rotateX: 2,
        rotateY: -2,
        boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
      }}
      className="bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-6 text-center transition-all duration-300"
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-[#2563eb]">{title}</h3>
      <p className="text-gray-700 mt-2 text-sm">{desc}</p>
    </motion.div>
  );
};

const OurPrograms = () => {
  return (
    <section className="bg-gradient-to-r from-[#fcd6e0] via-[#e0f3fc] to-[#d6ecff] py-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-extrabold text-[#ff69b4] mb-4">
          Our Programs
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Nurturing your child’s development through thoughtfully designed stages.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {programs.map((item, index) => (
          <AnimatedProgramCard key={index} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default OurPrograms;
