"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAppContext } from "../context/AppContext";

const FAQPage = () => {
  const { extra } = useAppContext();

  // Filter and reverse the FAQ items
  const faqs = [...extra]
    .filter((item) => item.title?.toLowerCase() === "faq")
    .reverse(); // latest first

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#d6ecff] via-[#e0f3fc] to-[#fcd6e0] py-20 px-6 md:px-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-[#ff69b4] mb-4">FAQs</h1>
        <p className="text-gray-700 text-lg max-w-xl mx-auto">
          Frequently Asked Questions from our lovely parents.
        </p>
      </motion.div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.details
            key={faq._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-md border border-white/30 rounded-xl p-6 shadow-md cursor-pointer transition-all"
          >
            <summary className="font-semibold text-blue-700 text-lg marker:text-pink-500">
              {faq.slogan}
            </summary>
            <p className="mt-3 text-gray-700">{faq.description}</p>
          </motion.details>
        ))}
      </div>
    </main>
  );
};

export default FAQPage;
