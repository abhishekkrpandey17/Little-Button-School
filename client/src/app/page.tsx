import React from "react";
import Background from "./mainpage/backgroud";

import Whychooseus from "./mainpage/whychooseus";
import Ourprogram from "./mainpage/ourprogram";
import HeroSection from "./mainpage/herosection";
import Footer from "./mainpage/footer";
import Admissionform from "./mainpage/admissionform";
import Navbar from "./mainpage/navbar";
import Calltoaction from "./mainpage/calltoaction";
import FAQPage from "./faq/faqpage";
import PhotosPage from "./photos/photospage";
import Testimonials from "@/app/testimonials/testimonials";
import ContactPage from "./contactus/contactpage";

const page = () => {
  return (
    <>
      <Background>
        <Navbar />
        <HeroSection />
        <Whychooseus />
        <Ourprogram />
        <PhotosPage />
        {/* <Admission/> */}
        <div id="apply">
          <Admissionform />
        </div>
        <Calltoaction />
        <Testimonials />
        <FAQPage />
        <ContactPage />
        <Footer />
      </Background>
    </>
  );
};

export default page;
