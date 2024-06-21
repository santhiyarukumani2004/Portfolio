import React from 'react'
import about from '../assets/qual1.png'

export const About = () => {
  return (
    <>
    <section className=' flex flex-col pb-10 md:flex-row text-white bg justify-evenly gap-4' id='about'>
        <div className='flex flex-col md:flex-row w-full'>
     {/* 1st w-1/2*/}
        <img src={about} className='w-full  md:w-1/2 object-cover max-h-96 text-center' />
     {/* {2nd} w-1/2*/}
        <div className="flex flex-col justify-center md:w-1/2 p-5">
        <h1 class="text-white font-bold text-nowrap text-4xl py-10 border-b-2 border-white">About Me
        <p className='text-sm font-thin pt-1 '>Freelance Web Developer</p>
        </h1>
        {/* <h2 className='text-2xl py-5 '>Freelance Web Developer</h2> */}
        <p className='text-sm leading-normal pt-2 md:text-lg md:leading-loose '>
        I have completed a <span className='font-bold'>Bachelor’s degree in Computer Science</span> (2024 batch) with an <span className='font-bold'>84% CGPA </span>from Sarah Tucker College, Tirunelveli-Perumalpuram. <br /><br />Additionally, I completed my schooling at Municipal Girls HR Sec School in Tirunelveli-Town, achieving <span className='font-bold'>94% </span>in <span className='font-bold'>SSLC</span> and <span className='font-bold'>92%</span> in <span className='font-bold'>HSC</span>.
       </p>   
        </div>
        </div> 
    </section>
    </>
  )
}
