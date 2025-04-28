
import React from 'react'

import Whychooseus from './mainpage/whychooseus'
import Ourprogram from './mainpage/ourprogram'
import Adayatourschool from './mainpage/adayatourschool'
import HeroSection from './mainpage/herosection'
import Footer from './mainpage/footer'
import Testimonial from './mainpage/testimonial'
import Photogalary from './mainpage/photogalary'
import Admission from './mainpage/admission'
import Admissionform from './mainpage/admissionform'
import Navbar from './mainpage/navbar'

const page = () => {
  return (
    <>
    <div className='bg-white'>
    <Navbar/>
    <HeroSection/>
    <Whychooseus />
    <Ourprogram />
    <Adayatourschool/>
    <Testimonial/>
    <Photogalary/>
    <Admission/>
    <Admissionform/>
    <Footer/>
    </div>

    </>
  )
}

export default page