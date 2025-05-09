import React from "react";
import Navbar from "../mainpage/navbar";
import Footer from "../mainpage/footer";
import PhotosAll from "./PhotosAll";
import Loader from "../components/Loader";

const page = () => {
  return (
    <>
      <Loader />
      <Navbar />
      <PhotosAll />

      <Footer />
    </>
  );
};

export default page;
