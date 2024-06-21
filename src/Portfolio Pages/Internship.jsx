import React from 'react'
import accord from '../assets/accord.jpg'
import techno from '../assets/tech.jpg'
import code from '../assets/co.png'

export const Internship = () => {
  const config = {
    intern : [
      {
        image:accord,
        description:'Backend Development using Java and Java2 Enterprise Edition',
        link:''
      },
      {
        image:techno,
        description:'Web Development using HTML, CSS, and Javascript',
        link:''
      },
      {
        image:code,
        description:'Web Development using React, Node.js, and MySQL',
        link:''
      },

    ]
  }
  return (
    <>
    <section className='w-full py-10 flex flex-col justify-center' id='intern'>
    <div className='flex justify-center items-center m-4'>
    <h1 class=" font-bold text-nowrap text-4xl py-3 border-b-2  border-black w-[180px]">Internship</h1>
    </div>
  {/* Images */}
    <div className='flex flex-col justify-center w-full md:flex-row gap-20'>
    {config.intern.map((interns,index)=>(
   <div className='relative  card  w-88 md:w-96'>
      <img src={interns.image} className='w-full h-auto' key={index}/><br />
      <div className='inset-0 flex items-center justify-center bg bg-opacity-40 text-white p-4'>
      <p className="" key={index}>{interns.description}</p>
      </div>
    </div>
  ))}
  </div>
  
</section>
  </>
  )
}
{/*     
    <div className='relative  md:w-96 card'>
      <img src={techno} className='w-full h-auto' /><br />
      <div className=' inset-0 flex items-center justify-center bg bg-opacity-50 text-white p-4'>
      <p className=""></p>
      </div>
    </div>
    <div className='relative  md:w-96 md:h-auto card'>
      <img src={code} className='w-full h-auto' /><br />
      <div className=' inset-0 flex items-center justify-center bg bg-opacity-50 text-white p-4'>
      <p className=""></p>
      </div>
    </div> */}
