"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AdmissionSection() {
  return (
    <section className="bg-gradient-to-r from-yellow-100 via-pink-50 to-blue-100 py-12 px-10 rounded-3xl shadow-lg max-w-6xl mx-auto my-12">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl font-extrabold text-center text-pink-700 mb-4"
      >
        Admission Process
      </motion.h2>
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="space-y-4 text-blue-900 text-base font-semibold"
      >
        <li>
          <span className="text-lg mr-2">📝</span>
          <b>Eligibility:</b> For Nursery, the child must be at least 3 years old by 30th September of the academic year[1][4].
        </li>
        <li>
          <span className="text-lg mr-2">🌐</span>
          <b>Step 1:</b> Fill out the online admission form with accurate details of the child and parents/guardians[1][3].
        </li>
        <li>
          <span className="text-lg mr-2">📄</span>
          <b>Step 2:</b> Upload/submit required documents: birth certificate, vaccination record, address proof, passport-size photos, and Aadhar card[1][3].
        </li>
        <li>
          <span className="text-lg mr-2">📬</span>
          <b>Step 3:</b> Submit the application. Our team will contact you for the next steps, which may include a friendly interaction or meeting.
        </li>
        <li>
          <span className="text-lg mr-2">📢</span>
          <b>Step 4:</b> Admission results will be communicated via email/SMS and displayed on the school notice board.
        </li>
      </motion.ul>
      <div className="mt-8 text-center">
        <a href="#admission-form">
          <motion.button
            whileHover={{ scale: 1.08, backgroundColor: "#f472b6" }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg transition"
          >
            Fill Admission Form
          </motion.button>
        </a>
      </div>
    </section>
  );
}
