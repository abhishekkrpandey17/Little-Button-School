"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/app/mainpage/navbar";
import Footer from "@/app/mainpage/footer";
import Modal from "react-modal";

const ActivityHub = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-[#dbc3eb] to-[#fdf2ff] p-6">
        <section className="max-w-5xl mt-20 mx-auto bg-white rounded-3xl shadow-xl p-6 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <Image
              src="/image/pic7.jpeg"
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
                At Little Buttons, we believe that early learning flourishes
                through movement, music, art, play, and expression. Our Activity
                Hub is a vibrant extension of our classroom program that
                encourages children to explore, express, and evolve through
                creative and collaborative experiences.
              </p>
            </div>
          </div>

          <section className="mt-10 space-y-6">
            <h2 className="text-2xl font-semibold text-[#933194]">
              What Makes Our Activity Hub Special
            </h2>
            <ul className="list-disc ml-6 space-y-4 text-gray-800 text-base leading-relaxed">
              {/* keep your original list items */}
              <li>
                <strong>🎨 Art & Craft Exploration</strong>
                <br />
                From free painting to theme-based crafts, children use safe,
                age-appropriate materials to express themselves while building
                fine motor skills.
              </li>
              <li>
                <strong>🧘 Yoga & Mindfulness</strong>
                <br />
                Gentle yoga and breathing exercises improve focus, balance, and
                body awareness, supporting emotional regulation.
              </li>
              <li>
                <strong>🕺 Dance & Movement</strong>
                <br />
                Rhymes, action songs, and freestyle dance sessions help children
                develop gross motor skills and rhythm—all while having fun.
              </li>
              <li>
                <strong>🎭 Drama & Role Play</strong>
                <br />
                Puppet shows, pretend play, and storytelling enhance language
                development, imagination, and empathy.
              </li>
              <li>
                <strong>🧩 Indoor Brain Games</strong>
                <br />
                Logical puzzles, memory games, and hands-on challenges
                strengthen cognitive flexibility and critical thinking.
              </li>
              <li>
                <strong>🧁 Life Skills & Everyday Learning</strong>
                <br />
                Activities like buttoning, pouring, tidying, and organizing
                teach independence, order, and real-life responsibility.
              </li>
              <li>
                <strong>🏃 Physical Play & Coordination</strong>
                <br />
                Outdoor games and obstacle courses build stamina, coordination,
                and team spirit in a safe environment.
              </li>
              <li>
                <strong>🎼 Music & Rhythm Time</strong>
                <br />
                Musical storytelling, clapping patterns, and percussion
                activities enhance auditory memory and creativity.
              </li>
              <li>
                <strong>💬 Circle Time Conversations</strong>
                <br />A safe space where children express ideas, share feelings,
                and build vocabulary while learning to listen and empathize.
              </li>
            </ul>

            <div className="mt-10 text-center">
              <button
                onClick={toggleModal}
                className="bg-[#933194] text-white px-6 py-3 rounded-xl text-lg shadow hover:scale-105 transition"
              >
                📝 Apply for Activity Hub
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

export default ActivityHub;
