import React from 'react'
import Navbar from '../mainpage/navbar'
import PrincipalMessage from './principal'
import Footer from '../mainpage/footer'



const page = () => {
  return (
    <>
    <Navbar/>

    <PrincipalMessage/>

    <Footer/>
    </>
  )
}

export default page