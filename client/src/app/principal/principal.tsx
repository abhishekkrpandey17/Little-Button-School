"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-r from-[#d6ecff] via-[#e0f3fc] to-[#fcd6e0] py-20 px-6 md:px-12">
        <div className="text-center mb-12 animate-pulse">
          <div className="h-10 w-72 bg-pink-200 rounded mx-auto mb-4"></div>
          <div className="h-4 w-80 bg-gray-300 rounded mx-auto"></div>
        </div>
        <div className="bg-white/60 backdrop-blur-md border border-white/40 rounded-3xl shadow-xl max-w-4xl mx-auto p-6 md:p-12 text-center animate-pulse">
          <div className="flex justify-center mb-6">
            <div className="w-28 h-28 rounded-full bg-pink-200"></div>
          </div>
          <div className="space-y-3 px-4">
            <div className="h-4 bg-gray-300 rounded w-11/12 mx-auto"></div>
            <div className="h-4 bg-gray-300 rounded w-10/12 mx-auto"></div>
            <div className="h-4 bg-gray-300 rounded w-9/12 mx-auto"></div>
            <div className="h-4 bg-gray-300 rounded w-7/12 mx-auto"></div>
          </div>
          <div className="mt-6 h-4 w-40 bg-pink-300 rounded mx-auto"></div>
          <div className="h-3 w-32 bg-gray-300 rounded mx-auto mt-2"></div>
        </div>
      </main>
    );
  }

  if (!data)
    return <p className="text-center text-red-500 mt-10">Message not found.</p>;

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#d6ecff] via-[#e0f3fc] to-[#fcd6e0] py-20 px-6 md:px-12">
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

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white/60 backdrop-blur-md border border-white/40 rounded-3xl shadow-xl max-w-4xl mx-auto p-6 md:p-12 text-center"
      >
        <div className="flex justify-center mb-6">
          <img
            src={`https://www.api.littlebuttons.swarananjani.org/${data.image}`}
            alt={data.slogan}
            width={120}
            height={120}
            className="rounded-full border-4 border-pink-300 shadow-md object-cover"
          />
        </div>

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
