"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAppContext } from "../context/AppContext";
const PhotosPage = () => {
  const { gallery } = useAppContext();

  const galleryImages = gallery;
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#fcd6e0] via-[#e0f3fc] to-[#d6ecff] py-20 px-6 md:px-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-[#ff69b4] mb-4">
          Photo Gallery
        </h1>
        <p className="text-gray-700 text-lg max-w-xl mx-auto">
          A glimpse into our joyful learning environment.
        </p>
      </motion.div>

      {/* Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {galleryImages
          .slice(6)
          .reverse()
          .map((item, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={
                  "https://api.littlebuttons.swarananjani.org/" + item.images[0]
                }
                alt={`Background ${index}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
      </div>
    </main>
  );
};

export default PhotosPage;
