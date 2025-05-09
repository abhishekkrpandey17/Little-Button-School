"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/app/mainpage/navbar";
import Footer from "@/app/mainpage/footer";

const kg2 = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-[#dbc3eb] to-[#fdf2ff] p-6">
        <section className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-6 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <Image
              src="/image/pic3.jpeg"
              alt="Kindergarten 2 Program"
              width={500}
              height={400}
              className="rounded-xl w-full object-cover shadow-lg"
            />
            <div>
              <h1 className="text-4xl font-bold text-[#933194] mb-4 text-center lg:text-left">
                Kindergarten 2 Program
              </h1>
              <p className="text-gray-700 text-lg text-center lg:text-left">
                A perfect bridge between preschool and Grade 1 for children aged
                5 to 6.
              </p>
            </div>
          </div>
          <section className="mt-10 space-y-6">
            <h2 className="text-2xl font-semibold text-[#933194]">
              Program Highlights
            </h2>
            <ul className="list-disc ml-6 space-y-4 text-gray-800 text-base leading-relaxed">
              <li>
                <strong>📘 Foundations in English Language</strong>
              </li>
              <li>
                <strong>🔤 Reading Aloud & Word Recognition</strong>
              </li>
              <li>
                <strong>✍️ Cursive Writing Introduction</strong>
              </li>
              <li>
                <strong>📅 Days of the Week & Their Spellings</strong>
              </li>
              <li>
                <strong>➕ Advanced Number Work</strong>
              </li>
              <li>
                <strong>➖ Understanding Subtraction</strong>
              </li>
              <li>
                <strong>✖️ Multiplication Tables (up to 5)</strong>
              </li>
              <li>
                <strong>👩‍🏫 Confidence-Building Activities</strong>
              </li>
              <li>
                <strong>🎨 Creative Expression & Imagination</strong>
              </li>
              <li>
                <strong>💡 Real-World Awareness</strong>
              </li>
            </ul>
            <div className="mt-10 text-center">
              <button className="bg-[#933194] text-white px-6 py-3 rounded-xl text-lg shadow hover:scale-105 transition">
                📝 Apply for Kindergarten 2 Program
              </button>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default kg2;
