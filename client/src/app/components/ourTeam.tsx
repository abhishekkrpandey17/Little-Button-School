"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Ms. Swarnjeet Kaur Gill",
    role: "Director",
    img: "/image/d1.jpeg",
  },
  {
    name: "Mrs. Spandana Majhi Sohi",
    role: "Curriculum Director",
    img: "/image/d21.jpg",
  },
  {
    name: "Mrs. Smita Mathur",
    role: "Core Faculty",
    img: "/image/Smita1.jpeg",
  },
  {
    name: "Mrs. Monika Naik",
    role: "Core Faculty",
    img: "/image/Monika1.jpeg",
  },
  {
    name: "Mrs.Pari Kalra",
    role: "Core Faculty",
    img: "/image/Pari.jpeg",
  },
  {
    name: "Ms. Sunita Parmar (Didi)",
    role: "Support staff",
    img: "/image/didi.jpeg",
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
      className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
    >
      <Link href={`/teampage/bio/${encodeURIComponent(name)}`} passHref>
        <div className="cursor-pointer">
          <Image
            src={img}
            alt={name}
            width={220}
            height={220}
            className="rounded-full mx-auto mb-4 border-4 border-pink-200"
          />
          <h3 className="text-lg font-bold text-blue-700">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </Link>
      <Link href={`/teampage/bio/${encodeURIComponent(name)}`} passHref>
        <button className="mt-4 bg-[#ff69b4] hover:bg-pink-500 text-white px-4 py-2 rounded-lg text-sm transition">
          Our Message
        </button>
      </Link>
    </motion.div>
  );
};

const OurTeam = () => {
  return (
    <section className="bg-gradient-to-r from-[#d6ecff] via-[#e0f3fc] to-[#fcd6e0] pt-20 pb-20 px-6 md:px-12">
      {/* Title */}
      <h2 className="text-4xl text-center  mt-10 font-extrabold text-[#ff69b4] mb-4">
        Meet Our Team
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto text-lg text-center">
        Passionate, experienced, and dedicated to nurturing young minds.
      </p>

      {/* Core Faculty */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-center mt-24 text-4xl text-[#ff69b4] font-extrabold w-[90vw]">
          Our Core Teachers
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center items-center w-[90vw] gap-x-10 gap-y-6">
        {team.slice(2, 5).map((item, index) => (
          <AnimatedTeamCard
            key={index}
            img={item.img}
            name={item.name}
            role={item.role}
            index={index}
          />
        ))}
      </div>

      {/* Support Staff */}
      <p className="text-center mt-24 text-3xl text-[#ff69b4] font-extrabold w-[90vw]">
        Our Support Staff
      </p>
      <div className="mt-7 flex flex-wrap justify-center items-center w-[90vw] gap-x-10 gap-y-6">
        {team.slice(5).map((item, index) => (
          <AnimatedTeamCard
            key={index}
            img={item.img}
            name={item.name}
            role={item.role}
            index={index}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="mt-24 text-center text-3xl text-[#ff69b4] font-extrabold w-[90vw]">
          Our Directors
        </p>
      </motion.div>

      {/* Directors */}
      <div className="flex mt-8 flex-wrap justify-center items-center w-[90vw] gap-x-10 gap-y-6">
        {team.slice(0, 2).map((item, index) => (
          <AnimatedTeamCard
            key={index}
            img={item.img}
            name={item.name}
            role={item.role}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
