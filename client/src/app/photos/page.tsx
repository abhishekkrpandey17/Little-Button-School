import React from "react";
import Navbar from "../mainpage/navbar";
import Footer from "../mainpage/footer";
import PhotosAll from "./PhotosAll";

const page = () => {
  return (
    <>
      <Navbar />
      <PhotosAll />

      <Footer />
    </>
  );
};

export default page;
