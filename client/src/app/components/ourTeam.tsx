"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Mrs. A. Sharma",
    role: "Principal",
    img: "/image/principal.jpg",
  },
  {
    name: "Mr. R. Verma",
    role: "Head of Kindergarten",
    img: "/image/team1.jpg",
  },
  {
    name: "Ms. N. Kapoor",
    role: "Activity Coordinator",
    img: "/image/team2.jpg",
  },
  {
    name: "Mrs. P. Sen",
    role: "Senior Nursery Educator",
    img: "/image/team3.jpg",
  },
  {
    name: "Mr. I. Khan",
    role: "Physical Education",
    img: "/image/team4.jpg",
  },
  {
    name: "Ms. R. Dutta",
    role: "Counselor",
    img: "/image/team5.jpg",
  },
];

const AnimatedTeamCard = ({
  name,
  role,
  img,
  index,
}: {
  name: string;
  role: string;
  img: string;
  index: number;
}) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, amount: 0.3 });
    
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
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
      className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center transition-all duration-300"
    >
      <Image
        src={img}
        alt={name}
        width={120}
        height={120}
        className="rounded-full mx-auto mb-4 border-4 border-pink-200"
      />
      <h3 className="text-lg font-bold text-blue-700">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
    </motion.div>
  );
};

const OurTeam = () => {
  return (
    <section className="bg-gradient-to-r from-[#d6ecff] via-[#e0f3fc] to-[#fcd6e0] py-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-extrabold text-[#ff69b4] mb-4">Meet Our Team</h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Passionate, experienced, and dedicated to nurturing young minds.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {team.map((member, index) => (
          <AnimatedTeamCard key={index} {...member} index={index} />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
