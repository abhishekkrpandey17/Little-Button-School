"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PrincipalMessage = () => {
  const [data, setData] = useState<null | {
    _id: string;
    image: string;
    slogan: string;
    description: string;
  }>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL_TEST}api/v1/about`
        );
        const result = await res.json();
        const message = result.find(
          (item: {
            _id: string;
            image: string;
            slogan: string;
            description: string;
          }) => item.slogan === "Director Message"
        );
        setData(message);
      } catch (error) {
        console.error("Error fetching message:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessage();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!data)
    return <p className="text-center text-red-500 mt-10">Message not found.</p>;

  console.log(`${process.env.NEXT_PUBLIC_API_BASE_URL_TEST}${data.image}`);
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
          {data.slogan}
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
        {/* Image */}
        <div className="flex justify-center mb-6">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL_TEST}${data.image}`}
            alt={data.slogan}
            width={120}
            height={120}
            className="rounded-full border-4 border-pink-300 shadow-md object-cover"
          />
        </div>

        {/* Message */}
        <p className="text-gray-800 text-base leading-relaxed whitespace-pre-line">
          {data.description}
        </p>

        <p className="mt-6 text-pink-600 font-bold text-lg">
          – Ms. Swaranjeet Kaur Gill
        </p>
        <p className="text-sm text-gray-600">
          Director, Little Buttons and SEF
        </p>
      </motion.div>
    </main>
  );
};

export default PrincipalMessage;
