"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AdmissionForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section
      id="admission-form"
      className="max-w-4xl mx-auto my-12 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 rounded-3xl shadow-2xl p-8"
      style={{ perspective: "1500px" }}
      
    >
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-2xl font-extrabold text-center text-pink-900 mb-6"
      >
        Admission Form
      </motion.h3>
      {submitted ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center text-black text-xl font-bold"
        >
          Thank you! Your application has been submitted.
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-3xl bg-white bg-opacity-90 p-8 shadow-lg"
          whileHover={{ rotateY: 5 }}
          transition={{ type: "spring", stiffness: 100 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1 text-pink-900">
                Child&apos;s Full Name
              </label>
              <input
                required
                type="text"
                className="w-full rounded-lg border border-pink-300 p-3 focus:outline-pink-500 bg-pink-50 text-pink-900"
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1 text-pink-900">
                Date of Birth
              </label>
              <input
                required
                type="date"
                className="w-full rounded-lg border border-pink-300 p-3 focus:outline-pink-500 bg-pink-50 text-pink-900"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1 text-pink-900">
                Gender
              </label>
              <select
                required
                className="w-full rounded-lg border border-pink-300 p-3 focus:outline-pink-500 bg-pink-50 text-pink-900"
              >
                <option value="">Select</option>
                <option>Girl</option>
                <option>Boy</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1 text-pink-900">
                Mother Tongue
              </label>
              <input
                required
                type="text"
                className="w-full rounded-lg border border-pink-300 p-3 focus:outline-pink-500 bg-pink-50 text-pink-900"
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1 text-pink-900">
              Address
            </label>
            <input
              required
              type="text"
              className="w-full rounded-lg border border-pink-300 p-3 focus:outline-pink-500 bg-pink-50 text-pink-900"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1 text-pink-900">
                Parent/Guardian Name
              </label>
              <input
                required
                type="text"
                className="w-full rounded-lg border border-pink-300 p-3 focus:outline-pink-500 bg-pink-50 text-pink-900"
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1 text-pink-900">
                Relationship to Child
              </label>
              <input
                required
                type="text"
                className="w-full rounded-lg border border-pink-300 p-3 focus:outline-pink-500 bg-pink-50 text-pink-900"
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1 text-pink-900">
              Contact Number
            </label>
            <input
              required
              type="tel"
              className="w-full rounded-lg border border-pink-300 p-3 focus:outline-pink-500 bg-pink-50 text-pink-900"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-pink-900">
              Email Address
            </label>
            <input
              required
              type="email"
              className="w-full rounded-lg border border-pink-300 p-3 focus:outline-pink-500 bg-pink-50 text-pink-900"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-pink-900">
              Upload Birth Certificate
            </label>
            <input
              required
              type="file"
              accept="image/*,application/pdf"
              className="w-full rounded-lg border border-pink-300 p-2 bg-white text-pink-900"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-pink-900">
              Upload Child&apos;s Photo
            </label>
            <input
              required
              type="file"
              accept="image/*"
              className="w-full rounded-lg border border-pink-300 p-2 bg-white text-pink-900"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.06, backgroundColor: "#f472b6" }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg transition"
          >
            Submit Application
          </motion.button>
        </motion.form>
      )}
    </section>
  );
}
