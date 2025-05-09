"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "../app/context/AppContext";
import Loader from "../app/components/Loader";

const LoadingPage = () => {
  const router = useRouter();
  const { setGallery, setExtra, setProgress, setLoading } = useAppContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const galleryRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/v1/gallery`
        );
        const extraRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/v1/extra`
        );
        const gallery = await galleryRes.json();
        const extra = await extraRes.json();
        setGallery(gallery);
        setExtra(extra);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    let progress = 0;
    const step = setInterval(() => {
      progress += 25;
      setProgress(progress);
    }, 350);

    fetchData();

    setTimeout(() => {
      clearInterval(step);
      setProgress(100);
      setLoading(false);
      router.push("/");
    }, 1750);
  }, []);

  return <Loader />;
};

export default LoadingPage;
