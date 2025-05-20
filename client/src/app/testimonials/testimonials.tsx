"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Mrs. A. Roy",
    message:
      "Little Buttons has been a blessing. My son wakes up excited every day! The staff is caring and the environment is perfect.",
    img: "/image/parent1.jpg",
  },
  {
    name: "Mr. D. Mehra",
    message:
      "Excellent teaching methods and a lot of activities. My daughter has become so confident and expressive.",
    img: "/image/parent2.jpg",
  },
  {
    name: "Mrs. S. Khan",
    message:
      "We feel safe sending our child here. The school ensures personal attention and a creative curriculum.",
    img: "/image/parent3.jpg",
  },
];

const TestimonialCard = ({
  name,
  message,
  img,
  index,
}: {
  name: string;
  message: string;
  img: string;
  index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 40 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      }}
      className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-lg transition-all duration-300"
    >
      <div className="flex justify-center mb-4">
        <Image
          src={img}
          alt={name}
          width={70}
          height={70}
          className="rounded-full border-2 border-pink-300 shadow-sm"
        />
      </div>
      <p className="text-gray-700 italic text-sm mb-4">“{message}”</p>
      <h4 className="text-pink-600 font-semibold text-center">{name}</h4>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-r from-[#fcd6e0] via-[#e0f3fc] to-[#d6ecff] py-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="mt-16 text-4xl font-extrabold text-[#ff69b4] mb-4">
          Parent Testimonials
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Hear what our amazing parents say about Little Buttons School.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((item, index) => (
          <TestimonialCard key={index} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
