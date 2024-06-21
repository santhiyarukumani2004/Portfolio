import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import workplace from '../assets/laptop.png'
// md->desktop layout [big screen]
// others normally like small screen 
import girl from '../assets/Hi.jpg'

export const Intro = () => {
  const config = {
    subtitle : 'Web Developer'
  }
  return (
    <>
     <section className='flex justify-evenly px-5 py-28' id='intro'>
      <div className='w-1/2 flex-col'>
      <h1 className='font-bold text-4xl py-4 px-3 leading-normal md:text-6xl md:leading-relaxed md:py-2'>Hi , I'm <br /><span className='text-3xl '>Ms</span> G.Santhiya <p className='text-2xl text-red-600'>{config.subtitle}</p>
         </h1>
      <div className='flex  px-4 py-10 gap-5 md:py-5'>
        <a href="santhiyarukumani@gmail.com" className='hover:text-gray-600'><MdEmail size={30} /></a>
       <a href="https://github.com/santhiyarukumani2004" className='hover:text-gray-600'><FaGithub size={30}/></a>  
       <a href="www.linkedin.com/in/santhiya-ganesan-a2973b24b" className='hover:text-gray-600'><FaLinkedin size={30}/></a>
      </div> 
      </div>
         {/* w-1/4 h-1/4 */}
          <img src={girl} className='w-1/4 max-h-96 object-contain'  />
     </section>

    </>
  )
}
