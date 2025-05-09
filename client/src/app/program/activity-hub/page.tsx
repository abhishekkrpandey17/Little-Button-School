"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/app/mainpage/navbar";
import Footer from "@/app/mainpage/footer";

const activity_hub = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-[#dbc3eb] to-[#fdf2ff] p-6">
        <section className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-6 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <Image
              src="/images/pic2.jpeg"
              alt="Activity Hub"
              width={500}
              height={400}
              className="rounded-xl w-full object-cover shadow-lg"
            />
            <div>
              <h1 className="text-4xl font-bold text-[#933194] mb-4 text-center lg:text-left">
                Activity Hub
              </h1>
              <p className="text-gray-700 text-lg text-center lg:text-left">
                Beyond-the-classroom learning for holistic growth and
                creativity.
              </p>
            </div>
          </div>
          <section className="mt-10 space-y-6">
            <h2 className="text-2xl font-semibold text-[#933194]">
              Program Highlights
            </h2>
            <ul className="list-disc ml-6 space-y-4 text-gray-800 text-base leading-relaxed">
              <li>
                <strong>🎨 Art & Craft Exploration</strong>
              </li>
              <li>
                <strong>🧘 Yoga & Mindfulness</strong>
              </li>
              <li>
                <strong>🕺 Dance & Movement</strong>
              </li>
              <li>
                <strong>🎭 Drama & Role Play</strong>
              </li>
              <li>
                <strong>🧩 Indoor Brain Games</strong>
              </li>
              <li>
                <strong>🧁 Life Skills & Everyday Learning</strong>
              </li>
              <li>
                <strong>🏃 Physical Play & Coordination</strong>
              </li>
              <li>
                <strong>🎼 Music & Rhythm Time</strong>
              </li>
              <li>
                <strong>💬 Circle Time Conversations</strong>
              </li>
            </ul>
            <div className="mt-10 text-center">
              <button className="bg-[#933194] text-white px-6 py-3 rounded-xl text-lg shadow hover:scale-105 transition">
                📝 Apply for Activity Hub
              </button>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default activity_hub;
