"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/app/mainpage/navbar";
import Footer from "@/app/mainpage/footer";
import Modal from "react-modal";

const Kg1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-[#dbc3eb] to-[#fdf2ff] p-6">
        <section className="max-w-5xl mx-auto bg-white mt-20 rounded-3xl shadow-xl p-6 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <Image
              src="/image/pic1.jpg"
              alt="Kindergarten 1"
              width={500}
              height={400}
              className="rounded-xl w-full object-cover shadow-lg"
            />
            <div>
              <h1 className="text-4xl font-bold text-[#933194] mb-4 text-center lg:text-left">
                Kindergarten 1 Program
              </h1>
              <p className="text-gray-700 text-lg text-center lg:text-left">
                Our KG1 program nurtures young minds through structured play,
                real-world learning and creative exploration.
              </p>
            </div>
          </div>

          <section className="mt-10 space-y-6">
            <h2 className="text-2xl font-semibold text-[#933194]">
              What Makes Our KG1 Program Special
            </h2>
            <ul className="list-disc ml-6 space-y-4 text-gray-800 text-base leading-relaxed">
              <li>
                <strong>🌈 Play-Based Learning through Movement:</strong> Floor
                games like jumping on letters and numbers make learning fun and
                active.
              </li>
              <li>
                <strong>🔢 Hands-On Math with Abacus & Games:</strong> Children
                learn through beads, counting tools and games.
              </li>
              <li>
                <strong>🍱 Learning During Lunch – Everyday Science:</strong>{" "}
                Mealtime is used to teach digestion and mindful eating habits.
              </li>
              <li>
                <strong>📖 Phonics & Word Blending Practice:</strong> Colorful
                charts and sounds support fluent reading development.
              </li>
              <li>
                <strong>🎭 Storytelling & Role Play:</strong> Enhances
                imagination, empathy and expression through dramatics.
              </li>
              <li>
                <strong>➕ Early Math Concepts:</strong> Gently introduces
                multiplication through repeated addition techniques.
              </li>
              <li>
                <strong>👩‍🏫 Confidence Through Teaching Roles:</strong> Kids love
                leading activities and explaining concepts to peers.
              </li>
              <li>
                <strong>🧠 Flashcard Word Recognition:</strong> Helps associate
                words with visuals for improved memory.
              </li>
              <li>
                <strong>🎶 Music, Phonics & Dance:</strong> Rhymes and songs
                make phonics joyful and easy to retain.
              </li>
              <li>
                <strong>🌟 Positive Reinforcement:</strong> Efforts are praised
                and celebrated to build confidence.
              </li>
            </ul>

            <div className="mt-10 text-center">
              <button
                onClick={toggleModal}
                className="bg-[#933194] text-white px-6 py-3 rounded-xl text-lg shadow hover:scale-105 transition"
              >
                📝 Apply for KG1 Program
              </button>
              <p className="text-sm mt-2 text-gray-500">
                Schedule a school tour | Talk to a coordinator
              </p>
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

export default Kg1;
