"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function AdmissionForm() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const payload = {
      childName: formData.get("childName"),
      dob: formData.get("dob"),
      gender: formData.get("gender"),
      language: formData.get("language"),
      address: formData.get("address"),
      guardian: formData.get("guardian"),
      relation: formData.get("relation"),
      phone: formData.get("phone"),
      email: formData.get("email"),
    };

    try {
      await axios.post(
        process.env.NEXT_PUBLIC_API_URL_TEST + "api/v1/email/send",
        payload
      );
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);

      alert("Email sent");
      form.reset();
    } catch (error) {
      console.error("Failed to submit form", error);
    }
  };

  return (
    <section className="max-w-4xl mx-auto my-12 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 rounded-3xl shadow-2xl p-8">
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
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-5 bg-white bg-opacity-90 p-8 shadow-lg rounded-3xl"
        >
          <input
            name="childName"
            placeholder="Child's Full Name"
            required
            className="w-full p-3 rounded border border-pink-300 bg-pink-50 text-pink-900"
          />
          <input
            name="dob"
            type="date"
            required
            className="w-full p-3 rounded border border-pink-300 bg-pink-50 text-pink-900"
          />
          <select
            name="gender"
            required
            className="w-full p-3 rounded border border-pink-300 bg-pink-50 text-pink-900"
          >
            <option value="">Gender</option>
            <option>Boy</option>
            <option>Girl</option>
            <option>Other</option>
          </select>
          <input
            name="language"
            placeholder="Mother Tongue"
            required
            className="w-full p-3 rounded border border-pink-300 bg-pink-50 text-pink-900"
          />
          <input
            name="address"
            placeholder="Address"
            required
            className="w-full p-3 rounded border border-pink-300 bg-pink-50 text-pink-900"
          />
          <input
            name="guardian"
            placeholder="Parent/Guardian Name"
            required
            className="w-full p-3 rounded border border-pink-300 bg-pink-50 text-pink-900"
          />
          <input
            name="relation"
            placeholder="Relationship to Child"
            required
            className="w-full p-3 rounded border border-pink-300 bg-pink-50 text-pink-900"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Contact Number"
            required
            className="w-full p-3 rounded border border-pink-300 bg-pink-50 text-pink-900"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="w-full p-3 rounded border border-pink-300 bg-pink-50 text-pink-900"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-full shadow-lg"
          >
            Submit Application
          </motion.button>
        </motion.form>
      )}
    </section>
  );
}
