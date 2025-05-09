import React from "react";
import Navbar from "../mainpage/navbar";
import PrincipalMessage from "./principal";
import Footer from "../mainpage/footer";
import { Loader } from "lucide-react";

const page = () => {
  return (
    <>
      <Loader />
      <Navbar />

      <PrincipalMessage />

      <Footer />
    </>
  );
};

export default page;
