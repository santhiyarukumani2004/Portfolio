import React from 'react'
import { FaArrowCircleUp } from "react-icons/fa";

export const Footer = () => {
  return (
    <section className='py-4 bg text-center text-white relative scroll-smooth' id='contact'>
        &copy; G Santhiya 2024
        <a href="#header">
        <FaArrowCircleUp className='absolute right-5 bottom-1 text-4xl '/>
        </a>
      
    </section>
  )
}
