import React from 'react'
import eco from '../assets/eco.jpg'
import mini from '../assets/mini.png'
import react from '../assets/react2.png'
export const Projects = () => {
  const config ={
    projects : [
      {
      image: eco,
      description: 'A Ecomerce Website built with MERN Stack.',
      link: ''
      },
      {
        image: mini,
        description: 'Mini projects using HTML,CSS and Javascript.',
        link: ''
        },
      {
          image: react,
          description: 'List of React Projects by fetching API.',
          link: ''
    },
    ]
  }
    
  
  return (
   <section className='flex  px-5 justify-center md:items-center py-10 bg flex-col ' id='project'>
    <div className='w-1/2 '>
        {/* Headings */}
        <div className='flex justify-center'>
        <h1 class="text-white font-bold text-nowrap text-4xl py-3 border-b-2 border-white w-[150px]">Projects</h1>
        </div>
    </div>
    
    <div className='w-full py-10 '>
        {/* Images */}
        <div className='flex flex-col justify-center items-center w-full m-auto md:flex-row gap-20'>
        {config.projects.map((project,index)=>(
             <div className='relative w-80  md:w-full'>
             <a href="">
              <img src={project.image} className='w-96 m-auto h-96' key={index}/>
             </a>
             <div className='project-desc'>
                <p key={index}>{project.description}</p>
             </div>
            </div>
        ))}
       
        {/* <div className='relative w-80 m-auto md:w-full'>
         <img src={mini} className='w-96 m-auto h-96'/>
         <div className='project-desc md:py-20'>
           <p>Mini projects using HTML,CSS and Javascript</p>
         </div>
        </div>
        <div className='relative w-80 m-auto  md:w-full '>
         <img src={react} className='w-96 m-auto h-96 '/>
         <div className='project-desc'>
            <p></p>
         </div>
        </div> */}
        </div> 
    </div>
   </section>
  )
}
