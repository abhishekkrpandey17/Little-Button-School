
import React from 'react'
import Background from './mainpage/backgroud'

import Whychooseus from './mainpage/whychooseus'
import Ourprogram from './mainpage/ourprogram'
import HeroSection from './mainpage/herosection'
import Footer from './mainpage/footer'
import Admission from './mainpage/admission'
import Admissionform from './mainpage/admissionform'
import Navbar from './mainpage/navbar'
import Calltoaction from './mainpage/calltoaction'
import FAQPage from './faq/faqpage'
import PhotosPage from './photos/photospage'
import Testimonials from '@/components/testimonials'

const page = () => {

  
  return (
    <>
    <Background>
    <Navbar/>
    <HeroSection/>
    <Whychooseus />
    <Ourprogram />
    <PhotosPage/>
    <Admission/>
    <Admissionform/>
    <Calltoaction/>
    <Testimonials/>
    <FAQPage/>
    <Footer/>
    </Background>

    </>
  )
}

export default page