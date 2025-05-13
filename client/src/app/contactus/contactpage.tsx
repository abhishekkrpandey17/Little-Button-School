"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#d6ecff] via-[#e0f3fc] to-[#fcd6e0] py-20 px-6 md:px-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-[#ff69b4] mb-4">Contact Us</h1>
        <p className="text-gray-700 text-lg max-w-xl mx-auto">
          We love to hear from you! Reach out with your questions, suggestions,
          or feedback.
        </p>
      </motion.div>

      {/* Contact Content */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 backdrop-blur-md border border-white/30 rounded-3xl p-8 shadow-lg"
        >
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                className="text-black w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none bg-white/80 placeholder:text-gray-400"
                placeholder="Your Name "
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                className="text-black w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none bg-white/80 placeholder:text-gray-400"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                className="text-black w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none bg-white/80 placeholder:text-gray-400"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="text-black w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none bg-white/80 placeholder:text-gray-400"
                placeholder="Write your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl shadow-md transition-all"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/60 backdrop-blur-md border border-white/30 rounded-3xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-6">
            School Contact Info
          </h2>
          <ul className="space-y-4 text-gray-800">
            <li>
              <strong>📍 Address:</strong> Villa 667 Omaxe city 1 ,Indore,
              Madhya Pradesh
            </li>
            <li>
              <strong>📞 Phone:</strong> +91 9039024010
            </li>
            <li>
              <strong>📧 Email:</strong> swarananjani.edu@gmail.com
            </li>
            <li>
              <strong>⏰ Timings:</strong> Mon–Fri: 8:30 AM – 3:30 PM
            </li>
          </ul>
        </motion.div>
      </div>
    </main>
  );
};

export default ContactPage;
