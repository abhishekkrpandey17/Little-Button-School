"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Smile,
  Users,
  Lightbulb,
  CheckCircle,
  BookOpenCheck,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <Smile className="w-10 h-10 text-pink-500" />,
    title: "Joyful Learning",
    desc: "Making learning joyful, interactive, and curiosity-driven.",
  },
  {
    icon: <Users className="w-10 h-10 text-blue-500" />,
    title: "Caring Teachers",
    desc: "Teachers who treat your child like their own.",
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
    title: "Creative Curriculum",
    desc: "Blending art, music, and games into learning.",
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-green-500" />,
    title: "Safe Environment",
    desc: "Secure, clean, and welcoming school premises.",
  },
  {
    icon: <BookOpenCheck className="w-10 h-10 text-violet-500" />,
    title: "Strong Foundation",
    desc: "Developing academic and emotional readiness for school.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-orange-500" />,
    title: "Parental Trust",
    desc: "Full transparency and active parent engagement.",
  },
];

type CardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  index: number;
};

const AnimatedCard: React.FC<CardProps> = ({ icon, title, desc, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ y: 0, opacity: 1 });
    } else {
      controls.start({ y: 50, opacity: 0 });
    }
  }, [isInView, controls]);

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

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-r from-[#d6ecff] via-[#e0f3fc] to-[#fcd6e0] py-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-extrabold text-[#ff69b4] mb-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Building bright futures with care, creativity, and confidence.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((item, index) => (
          <AnimatedCard key={index} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
