import React from "react";
import Navbar from "../mainpage/navbar";
import FAQPage from "./faqpage";
import Footer from "../mainpage/footer";
import Loader from "../components/Loader";

const page = () => {
  return (
    <>
      <Loader />
      <Navbar />

      <FAQPage />

      <Footer />
    </>
  );
};

export default page;
