"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/app/mainpage/navbar";
import Footer from "@/app/mainpage/footer";
import Modal from "react-modal";

const Kg2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-[#dbc3eb] to-[#fdf2ff] p-6">
        <section className="max-w-5xl mt-20 mx-auto bg-white rounded-3xl shadow-xl p-6 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center gap-4">
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
                As children approach formal schooling, our Kindergarten 2 (UKG)
                program at Little Buttons provides the perfect bridge between
                early childhood education and primary school...
              </p>
            </div>
          </div>

          <section className="mt-10 space-y-6">
            <h2 className="text-2xl font-semibold text-[#933194]">
              Key Highlights of Our KG2 Program
            </h2>
            <ul className="list-disc ml-6 space-y-4 text-gray-800 text-base leading-relaxed">
              <li>
                <strong>📘 Foundations in English Language</strong>
                <br /> Grammar basics, storytelling, and structured sentence
                building.
              </li>
              <li>
                <strong>🔤 Reading Aloud & Word Recognition</strong>
                <br /> Fluency and spelling number words up to 20 with
                comprehension.
              </li>
              <li>
                <strong>✍️ Cursive Writing Introduction</strong>
                <br /> Stroke-by-stroke guidance to improve handwriting and
                focus.
              </li>
              <li>
                <strong>📅 Days of the Week & Their Spellings</strong>
                <br /> Songs and calendar activities build time structure and
                sequencing.
              </li>
              <li>
                <strong>➕ Advanced Number Work</strong>
                <br /> Visual tools like number lines and blocks build number
                fluency.
              </li>
              <li>
                <strong>➖ Understanding Subtraction</strong>
                <br /> Real-life examples and picture worksheets make it
                relatable.
              </li>
              <li>
                <strong>✖️ Multiplication Tables (up to 5)</strong>
                <br /> Fun recitations and rhythm help embed multiplication
                basics.
              </li>
              <li>
                <strong>👩‍🏫 Confidence-Building Activities</strong>
                <br /> Public speaking, discussions, and class leadership roles.
              </li>
              <li>
                <strong>🎨 Creative Expression & Imagination</strong>
                <br /> Drawing, music, drama and free expression every day.
              </li>
              <li>
                <strong>💡 Real-World Awareness</strong>
                <br /> Health, hygiene, safety, and manners are part of daily
                lessons.
              </li>
            </ul>

            <div className="mt-10 text-center">
              <button
                onClick={toggleModal}
                className="bg-[#933194] text-white px-6 py-3 rounded-xl text-lg shadow hover:scale-105 transition"
              >
                📝 Apply for Kindergarten 2 Program
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

export default Kg2;
