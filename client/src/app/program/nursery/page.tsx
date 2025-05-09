"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/app/mainpage/navbar";
import Footer from "@/app/mainpage/footer";

const nursery = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-[#dbc3eb] to-[#fdf2ff] p-6">
        <section className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-6 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <Image
              src="/image/pic4.jpg"
              alt="Nursery Program"
              width={500}
              height={400}
              className="rounded-xl w-full object-cover shadow-lg"
            />
            <div>
              <h1 className="text-4xl font-bold text-[#933194] mb-4 text-center lg:text-left">
                Nursery Program
              </h1>
              <p className="text-gray-700 text-lg text-center lg:text-left">
                Designed to spark curiosity and build early independence in 3 to
                4 year olds.
              </p>
            </div>
          </div>
          <section className="mt-10 space-y-6">
            <h2 className="text-2xl font-semibold text-[#933194]">
              Program Highlights
            </h2>
            <ul className="list-disc ml-6 space-y-4 text-gray-800 text-base leading-relaxed">
              <li>
                <strong>🧸 A Warm, Positive Environment</strong>
              </li>
              <li>
                <strong>🎲 Learning Through Play & Exploration</strong>
              </li>
              <li>
                <strong>👯 Group Play & Social Skills</strong>
              </li>
              <li>
                <strong>🌈 Sensory Play for Brain Development</strong>
              </li>
              <li>
                <strong>🗣️ Early Language & Vocabulary Building</strong>
              </li>
              <li>
                <strong>🧠 Fine & Gross Motor Development</strong>
              </li>
              <li>
                <strong>😊 Social & Emotional Growth</strong>
              </li>
              <li>
                <strong>🔍 Cognitive Skill Building</strong>
              </li>
              <li>
                <strong>🎨 Creative Expression through Art & Music</strong>
              </li>
              <li>
                <strong>🌟 Multi-Sensory Learning Approach</strong>
              </li>
            </ul>
            <div className="mt-10 text-center">
              <button className="bg-[#933194] text-white px-6 py-3 rounded-xl text-lg shadow hover:scale-105 transition">
                📝 Apply for Nursery Program
              </button>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default nursery;
