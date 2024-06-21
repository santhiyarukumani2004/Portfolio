import React from 'react'
import resumeimg from '../assets/illustrate.png'
import resume from '/Resume.pdf'

// array not support key,value pair so we need map only for array so array[] inside object{}
export const Resume = () => {
  const config = {
    resume : [
      {name:resume}
    ]
  }
  return (
    <section className=' flex flex-col  md:flex-row text-black justify-end gap-10 p-10 'id='resume'>
    <div className='flex flex-col md:flex-row w-full md:gap-7  justify-center'>
  {/* 1st w-1/2*/}
    <img src={resumeimg} className='w-full md:w-[500px] object-cover  px-12' />
    </div> 
  {/* {2nd} w-1/2*/}
  <div className="flex flex-col justify-center m-auto md:w-1/2">
    <h1 class=" font-bold text-nowrap text-4xl py-3 border-b-2 border-black w-[150px]">Resume
    </h1>
    <br />
    <p className='w-full '>You can view my resume</p>
     <br />
     {config.resume.map((resumename,index)=>(
      <button className='bg text-white w-32 h-10 rounded-md hover:opacity-50'>
      <a href={resumename} download="Resume_G.Santhiya.pdf" key={index} className='w-full h-full flex items-center justify-center'>
         Download</a>
      </button>
     ))}
     
    </div>
  
  </section>
  )
}
