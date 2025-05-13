"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/app/mainpage/navbar";
import Footer from "@/app/mainpage/footer";
import Modal from "react-modal";

const Nursery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-[#dbc3eb] to-[#fdf2ff] p-6">
        <section className="max-w-5xl mt-20 mx-auto bg-white rounded-3xl shadow-xl p-6 lg:p-10">
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
                At Little Buttons, our Nursery program is designed to spark
                curiosity, build routines, and encourage early independence...
              </p>
            </div>
          </div>

          <section className="mt-10 space-y-6">
            <h2 className="text-2xl font-semibold text-[#933194]">
              What Makes Our Nursery Program Unique
            </h2>
            <ul className="list-disc ml-6 space-y-4 text-gray-800 text-base leading-relaxed">
              <li>
                <strong>🧸 A Warm, Positive Environment</strong>
                <br /> Cheerful classrooms, gentle guidance, and familiar
                routines help children feel safe and loved.
              </li>
              <li>
                <strong>🎲 Learning Through Play & Exploration</strong>
                <br /> Block play, pretend games, puzzles and more boost
                thinking and motor skills.
              </li>
              <li>
                <strong>👯 Group Play & Social Skills</strong>
                <br /> Sharing, teamwork, and turn-taking foster friendship and
                communication.
              </li>
              <li>
                <strong>🌈 Sensory Play for Brain Development</strong>
                <br /> Sand, water, textures, and clay enhance focus and
                curiosity.
              </li>
              <li>
                <strong>🗣️ Early Language & Vocabulary Building</strong>
                <br /> Rhymes, books, and conversation circles help children
                express themselves.
              </li>
              <li>
                <strong>🧠 Fine & Gross Motor Development</strong>
                <br /> Activities like drawing and dancing improve coordination
                and control.
              </li>
              <li>
                <strong>😊 Social & Emotional Growth</strong>
                <br /> Recognizing feelings and following routines build empathy
                and self-awareness.
              </li>
              <li>
                <strong>🔍 Cognitive Skill Building</strong>
                <br /> Matching, patterns, and sequencing tasks improve memory
                and reasoning.
              </li>
              <li>
                <strong>🎨 Creative Expression through Art & Music</strong>
                <br /> Art, music, and movement sessions build creativity and
                joy.
              </li>
              <li>
                <strong>🌟 Multi-Sensory Learning Approach</strong>
                <br /> A blend of visual, auditory, tactile, and motion learning
                for all types of learners.
              </li>
            </ul>

            <div className="mt-10 text-center">
              <button
                onClick={toggleModal}
                className="bg-[#933194] text-white px-6 py-3 rounded-xl text-lg shadow hover:scale-105 transition"
              >
                📝 Apply for Nursery Program
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

export default Nursery;
