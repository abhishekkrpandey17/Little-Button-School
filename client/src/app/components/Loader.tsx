"use client";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

const Loader = () => {
  const { setGallery, setExtra, setProgress, progress } = useAppContext();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const galleryRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL_TEST}api/v1/gallery`
        );
        const extraRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL_TEST}api/v1/extra`
        );
        const gallery = await galleryRes.json();
        const extra = await extraRes.json();
        setGallery(gallery);
        setExtra(extra);
      } catch (error) {
        console.error("API fetch error", error);
      }
    };

    fetchData();

    const sequence = [30, 70, 100];
    sequence.forEach((val, i) => {
      setTimeout(() => {
        setProgress(val);
        if (val === 100) {
          setTimeout(() => setShow(false), 500); // fade out
        }
      }, i * 600);
    });
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-white/70 backdrop-blur-lg z-50 flex flex-col items-center justify-center transition-opacity duration-500">
      <h2 className="text-[#933194] text-3xl font-bold mb-4">
        Loading... {progress}%
      </h2>
      <div className="w-64 h-3 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#933194] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Loader;
