"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PrincipalMessage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#d6ecff] via-[#e0f3fc] to-[#fcd6e0] py-20 px-6 md:px-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold text-[#ff69b4] mb-4">
          Principal's Message
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          A word of warmth, vision, and dedication from our school leader.
        </p>
      </motion.div>

      {/* Message Box */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white/60 backdrop-blur-md border border-white/40 rounded-3xl shadow-xl max-w-4xl mx-auto p-6 md:p-12 text-center"
      >
        {/* Optional Principal Image */}
        <div className="flex justify-center mb-6">
          <Image
            src="/image/principal.jpg" // replace with real image
            alt="Principal"
            width={120}
            height={120}
            className="rounded-full border-4 border-pink-300 shadow-md"
          />
        </div>

        {/* Message */}
        <p className="text-gray-800 text-base leading-relaxed">
          <em>
            “At Little Buttons School, we believe that every child is unique,
            capable, and filled with potential. Our mission is to foster a
            loving, joyful, and engaging learning environment where children
            feel safe, valued, and inspired to learn. Together with a dedicated
            team and supportive families, we nurture curiosity, compassion, and
            confidence — building strong foundations for a bright future.”
          </em>
        </p>

        <p className="mt-6 text-pink-600 font-bold text-lg">– Mrs. A. Sharma</p>
        <p className="text-sm text-gray-600">Principal, Little Buttons School</p>
      </motion.div>
    </main>
  );
};

export default PrincipalMessage;
