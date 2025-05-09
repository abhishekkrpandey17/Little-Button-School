"use client";
import React from "react";
import Image from "next/image";
import Footer from "@/app/mainpage/footer";
import Navbar from "@/app/mainpage/navbar";

const play_school = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-[#dbc3eb] to-[#fdf2ff] p-6">
        <section className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-6 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <Image
              src="/image/pic5.jpeg"
              alt="Play School Program"
              width={500}
              height={400}
              className="rounded-xl w-full object-cover shadow-lg"
            />
            <div>
              <h1 className="text-4xl font-bold text-[#933194] mb-4 text-center lg:text-left">
                Play School Program
              </h1>
              <p className="text-gray-700 text-lg text-center lg:text-left">
                A joyful first step into learning for toddlers aged 2 to 3
                years.
              </p>
            </div>
          </div>
          <section className="mt-10 space-y-6">
            <h2 className="text-2xl font-semibold text-[#933194]">
              Program Highlights
            </h2>
            <ul className="list-disc ml-6 space-y-4 text-gray-800 text-base leading-relaxed">
              <li>
                <strong>🧸 Alphabet and Phonics with Flashcards</strong>
              </li>
              <li>
                <strong>🔢 Early Numeracy with Concrete Objects</strong>
              </li>
              <li>
                <strong>🎶 Rhymes and Music Time</strong>
              </li>
              <li>
                <strong>🔁 Concept Learning: Opposites and Shapes</strong>
              </li>
              <li>
                <strong>🚶 Action Words & Movement Games</strong>
              </li>
              <li>
                <strong>🎨 Creative Crafts & Art Expression</strong>
              </li>
              <li>
                <strong>🔵 Colour & Theme Days</strong>
              </li>
              <li>
                <strong>👫 Social Interaction & Group Play</strong>
              </li>
              <li>
                <strong>🧠 Cognitive Skill Building</strong>
              </li>
              <li>
                <strong>🧼 Habit Formation & Independence</strong>
              </li>
            </ul>
            <div className="mt-10 text-center">
              <button className="bg-[#933194] text-white px-6 py-3 rounded-xl text-lg shadow hover:scale-105 transition">
                📝 Apply for Play School Program
              </button>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default play_school;
