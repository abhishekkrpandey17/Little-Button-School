"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/app/mainpage/navbar";
import Footer from "@/app/mainpage/footer";

const prep_school = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-[#dbc3eb] to-[#fdf2ff] p-6">
        <section className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-6 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <Image
              src="/image/pic1.jpg"
              alt="Prep-School Program"
              width={500}
              height={400}
              className="rounded-xl w-full object-cover shadow-lg"
            />
            <div>
              <h1 className="text-4xl font-bold text-[#933194] mb-4 text-center lg:text-left">
                Prep-School Program
              </h1>
              <p className="text-gray-700 text-lg text-center lg:text-left">
                Evening bridge program for 5.5 to 6.5 year olds transitioning to
                formal school.
              </p>
            </div>
          </div>
          <section className="mt-10 space-y-6">
            <h2 className="text-2xl font-semibold text-[#933194]">
              Program Highlights
            </h2>
            <ul className="list-disc ml-6 space-y-4 text-gray-800 text-base leading-relaxed">
              <li>
                <strong>📚 Blended Curriculum of KG1 + KG2</strong>
              </li>
              <li>
                <strong>🧠 Grade 1 School Readiness Focus</strong>
              </li>
              <li>
                <strong>✍️ Handwriting & Writing Fluency</strong>
              </li>
              <li>
                <strong>🗣️ Spoken English & Confidence Building</strong>
              </li>
              <li>
                <strong>➕ Logical Thinking & Math Fluency</strong>
              </li>
              <li>
                <strong>🧑‍🏫 Discipline, Routine & Classroom Etiquette</strong>
              </li>
              <li>
                <strong>🎨 Creative & Holistic Development</strong>
              </li>
              <li>
                <strong>🧩 Small Batches, Individual Attention</strong>
              </li>
            </ul>
            <div className="mt-10 text-center">
              <button className="bg-[#933194] text-white px-6 py-3 rounded-xl text-lg shadow hover:scale-105 transition">
                📝 Apply for Prep-School Program
              </button>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default prep_school;
