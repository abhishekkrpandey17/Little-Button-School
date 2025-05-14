"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Footer from "@/app/mainpage/footer";
import Navbar from "@/app/mainpage/navbar";

const mockBios: Record<string, { role: string; bio: string; img: string }> = {
  "Mrs. Swarnjeet Kaur Gill": {
    role: "Director",
    img: "/image/d1.jpeg",
    bio: "At Little Buttons, we work closely with parents, because we believe learning is most powerful when school and home walk hand in hand. Your voice matters here, and your child will always be seen, heard, and celebrated.A warm welcome to Little Buttons! As both a mother and an educator with over 15 years of experience in childhood education, I understand the trust it takes to place your little one in someone else’s care. Having raised my own children as a single parent, I know firsthand how deeply we wish to give our children a nurturing, safe, and joyful start in life—and that’s exactly what we promise at Little Buttons.This preschool is not just a school to me—it’s a part of my heart. Every child who walks through our doors becomes part of a loving, extended family. I believe that early childhood is not simply a stepping stone to “real school,” but a precious stage that deserves all the care, attention, and celebration we can give. Here, children are allowed to be themselves—to wonder, to ask, to explore, and to bloom at their own pace",
  },
  "Mrs. Spandana Majhi Sohi": {
    role: "Curriculum Director",
    img: "/image/d2.jpg",
    bio: "At Little Buttons, we believe children blossom not just through teaching, but through every warm smile, gentle word, and caring hand that surrounds them each day. Namaste and a heartfelt welcome to Little Buttons! As the Curriculum Head, I have the joy and responsibility of shaping the learning journey for our little learners—and I do so with deep respect for both modern educational insights and the rich cultural fabric of our Indian heritage.At Little Buttons, we believe that the foundation years of a child’s life are not just about learning the alphabet or numbers—they’re about building character, sparking curiosity, and nurturing emotional strength. Our curriculum is thoughtfully designed to balance academic readiness with life skills, creative expression, and values that reflect who we are as a society.",
  },
  "Ms. Smita Mathur": {
    role: "Core Faculty",
    img: "/image/Smita1.jpeg",
    bio: "With over 10 years of experience in the banking sector, I discovered my love for Montessori teaching as I became a mother. Being a teacher to these kids brings me endless joy and purpose. I believe that every child is unique, and I strive to create a classroom where little ones feel safe, loved, and free to be themselves. ",
  },
  "Ms. Monika Naik": {
    role: "Core Faculty",
    img: "/image/Monika1.jpeg",
    bio: "It’s been my absolute joy and privilege to be part of the teaching world for over 15 years. As a Kindergarten teacher, I see every day as a fresh opportunity to nurture young minds, encourage little hearts, and guide children through their first steps into the world of learning.With a strong passion for education, I believe in making a positive impact on students’ lives.I love to spend time with kids. I am also an arts and crafts teacher, and hence, more inclined to make kids learn through activities.",
  },
  "Ms.Pari Kalra": {
    role: "Core Faculty",
    img: "/image/Pari.jpeg",
    bio: "Mother to 3 beautiful daughters, I stand extremely passionate about education and believe that with hard work and determination, we can achieve great things.  I feel truly blessed to be a Nursery teacher here at Little Buttons. For the past two years, I’ve had the joy of guiding our youngest learners through their first experiences of school life—and it’s been nothing short of magical.",
  },
  "Sunita Parmar (Didi)": {
    role: "Support staff",
    img: "/image/didi.jpeg",
    bio: "मुझे यहाँ काम करके बहुत अच्छा लगता है! यहाँ काम करते करते मे इंग्लिश भी सीख लेती हु। बच्चों क साथ खेलते खेलते वक्त कब निकल जाता है पता ही नहीं चाहती ।  मुझे तो घर से ज़्यादा अच्छा यहाँ स्कूल में लगता है ।  पढ़ने का बोहोत शौक था मुझे पर घर में भाई बेहेन ज़्यादा होने के कारन पढाई रुक गयी।  पर आज इनको देखकर लगता है की में अब भी रोज़ कुछ न कुछ सीख सकती हु!",
  },
};

const Page = () => {
  const params = useParams();
  const decodedName = decodeURIComponent(params.name as string);

  const person = mockBios[decodedName];

  if (!person) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        <p>No bio found for this person.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-[#dbc3eb] to-[#fdf2ff] p-8">
        <div className="max-w-3xl mt-30 mx-auto bg-white shadow-xl rounded-3xl p-10 text-center">
          <Image
            src={person.img}
            alt={decodedName}
            width={200}
            height={200}
            className="rounded-full mx-auto border-4 border-pink-200 mb-6"
          />
          <h1 className="text-3xl font-bold text-[#933194] mb-2">
            {decodedName}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{person.role}</p>
          <p className="text-base text-gray-800 leading-relaxed">
            {person.bio}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
