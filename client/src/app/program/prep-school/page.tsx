"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/app/mainpage/navbar";
import Footer from "@/app/mainpage/footer";
import Modal from "react-modal";

const PrepSchool = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-[#dbc3eb] to-[#fdf2ff] p-6">
        <section className="max-w-5xl mt-20 mx-auto bg-white rounded-3xl shadow-xl p-6 lg:p-10">
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
                Our 6-month evening bridge program for 5.5 to 6.5-year-olds is
                designed to prepare children for Grade 1 in a structured yet
                playful environment. It boosts academic readiness,
                communication, and classroom behavior.
              </p>
            </div>
          </div>

          <section className="mt-10 space-y-6">
            <h2 className="text-2xl font-semibold text-[#933194]">
              What Makes Our Prep-School Program Unique
            </h2>
            <ul className="list-disc ml-6 space-y-4 text-gray-800 text-base leading-relaxed">
              <li>
                <strong>📚 Blended Curriculum of KG1 + KG2</strong>
                <br />
                We combine key areas from both Kindergarten 1 and 2 to ensure
                mastery in literacy, numeracy, and communication, aligned with
                Grade 1 expectations.
              </li>
              <li>
                <strong>🧠 Grade 1 School Readiness Focus</strong>
                <br />
                We cover phonics, cursive writing, grammar basics, number word
                spellings, tables up to 5, and simple math—building readiness
                for formal school assessments.
              </li>
              <li>
                <strong>✍️ Handwriting & Writing Fluency</strong>
                <br />
                Children practice both print and cursive writing with focus on
                neatness and structure for classroom readiness.
              </li>
              <li>
                <strong>🗣️ Spoken English & Confidence Building</strong>
                <br />
                Through read-alouds, storytelling, and public speaking, children
                gain fluency, pronunciation clarity, and expressive confidence.
              </li>
              <li>
                <strong>➕ Logical Thinking & Math Fluency</strong>
                <br />
                We reinforce number sense using abacus, flashcards, visual
                tools, and basic arithmetic operations with confidence-building
                exercises.
              </li>
              <li>
                <strong>🧑‍🏫 Discipline, Routine & Classroom Etiquette</strong>
                <br />
                Through role-play and daily responsibilities, children learn
                focus, responsibility, and behavioral discipline—just like in
                school.
              </li>
              <li>
                <strong>🎨 Creative & Holistic Development</strong>
                <br />
                Balanced with music, art, and storytelling, our program nurtures
                imagination and emotional development.
              </li>
              <li>
                <strong>🧩 Small Batches, Individual Attention</strong>
                <br />
                Limited seats ensure personalized learning. Educators can
                identify and support the unique learning pace of each child.
              </li>
            </ul>

            <div className="mt-10 text-center">
              <button
                onClick={toggleModal}
                className="bg-[#933194] text-white px-6 py-3 rounded-xl text-lg shadow hover:scale-105 transition"
              >
                📝 Apply for Prep-School Program
              </button>
            </div>
          </section>
        </section>
      </main>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        className="bg-white w-[90%] max-w-md mx-auto rounded-xl p-6 shadow-xl outline-none z-50"
        overlayClassName="fixed inset-0 bg-white/40 backdrop-blur-sm flex justify-center items-center z-40"
      >
        <h2 className="text-2xl font-semibold text-center text-[#933194] mb-4">
          Admission Form
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Child's Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#933194]"
          />
          <input
            type="email"
            placeholder="Parent's Email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#933194]"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#933194]"
          />
          <div className="flex justify-between gap-4">
            <button
              type="submit"
              className="flex-1 bg-[#933194] text-white py-2 rounded-md hover:bg-[#7b2b7e] transition"
            >
              Submit
            </button>
            <button
              type="button"
              className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300"
              onClick={toggleModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>

      <Footer />
    </>
  );
};

export default PrepSchool;
