"use client";

import React from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What age groups do you accept?",
    answer: "We accept children from 1.5 years to 6 years across Playgroup, Nursery, Kindergarten, and Daycare programs.",
  },
  {
    question: "What are your school timings?",
    answer: "Our school operates from 8:30 AM to 3:30 PM, Monday through Friday. Daycare is available until 6:00 PM.",
  },
  {
    question: "Is transportation available?",
    answer: "Yes, we provide safe and supervised pick-up and drop-off services in nearby localities.",
  },
  {
    question: "What is your teaching approach?",
    answer: "We use a blend of play-based, activity-driven, and experiential learning to promote holistic development.",
  },
  {
    question: "Do you allow parent visits?",
    answer: "Yes! We encourage parents to visit and participate in school events and open days with prior notice.",
  },
];

const FAQPage = () => {
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
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-md border border-white/30 rounded-xl p-6 shadow-md cursor-pointer transition-all"
          >
            <summary className="font-semibold text-blue-700 text-lg marker:text-pink-500">
              {faq.question}
            </summary>
            <p className="mt-3 text-gray-700">{faq.answer}</p>
          </motion.details>
        ))}
      </div>
    </main>
  );
};

export default FAQPage;
