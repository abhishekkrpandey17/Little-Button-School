"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "@/app/mainpage/footer";
import Navbar from "@/app/mainpage/navbar";
import Modal from "react-modal";

const PlaySchool = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-[#dbc3eb] to-[#fdf2ff] p-6">
        <section className="max-w-5xl mt-20 mx-auto bg-white rounded-3xl shadow-xl p-6 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center gap-4">
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
                The Play School Program at Little Buttons is where a child’s
                journey into structured learning begins—with warmth, joy, and
                play. Specially designed for toddlers aged 2 to 3 years, our
                curriculum focuses on making children comfortable away from home
                while engaging their minds through interactive play, sensory
                exploration, and language-rich activities.
              </p>
            </div>
          </div>

          <section className="mt-10 space-y-6">
            <h2 className="text-2xl font-semibold text-[#933194]">
              Key Features of Our Play School Program
            </h2>
            <ul className="list-disc ml-6 space-y-4 text-gray-800 text-base leading-relaxed">
              <li>
                <strong>🧸 Alphabet and Phonics with Flashcards</strong>
                <br />
                Introduction to A–Z letters using flashcards and phonics.
                Children learn by linking sounds with real-world examples like
                animals and objects.
              </li>
              <li>
                <strong>🔢 Early Numeracy with Concrete Objects</strong>
                <br />
                Numbers taught through hands-on counting using blocks, beads,
                and toys—helping children feel and understand quantities.
              </li>
              <li>
                <strong>🎶 Rhymes and Music Time</strong>
                <br />
                Daily singing sessions with action rhymes and musical props
                improve language, rhythm, and memory.
              </li>
              <li>
                <strong>🔁 Concept Learning: Opposites and Shapes</strong>
                <br />
                Concepts like big–small or up–down are taught through physical
                actions, while shape recognition is done with toys and everyday
                objects.
              </li>
              <li>
                <strong>🚶 Action Words & Movement Games</strong>
                <br />
                Interactive learning of action words through obstacle games and
                movement-based vocabulary practice.
              </li>
              <li>
                <strong>🎨 Creative Crafts & Art Expression</strong>
                <br />
                Activities like finger painting, paper tearing, and sticker art
                nurture creativity and fine motor skills.
              </li>
              <li>
                <strong>🔵 Colour & Theme Days</strong>
                <br />
                Celebrations of color days like Red Day or Blue Day include
                themed activities, games, and dressing up for fun learning.
              </li>
              <li>
                <strong>👫 Social Interaction & Group Play</strong>
                <br />
                Turn-taking, sharing, and bonding are developed through circle
                time, storytelling, and group activities.
              </li>
              <li>
                <strong>🧠 Cognitive Skill Building</strong>
                <br />
                Puzzles, picture recognition, and memory games support early
                thinking and observation.
              </li>
              <li>
                <strong>🧼 Habit Formation & Independence</strong>
                <br />
                Toddlers learn daily routines like handwashing, packing bags,
                and putting toys back—fostering independence gently.
              </li>
            </ul>

            <div className="mt-10 text-center">
              <button
                onClick={toggleModal}
                className="bg-[#933194] text-white px-6 py-3 rounded-xl text-lg shadow hover:scale-105 transition"
              >
                📝 Apply for Play School Program
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

export default PlaySchool;
