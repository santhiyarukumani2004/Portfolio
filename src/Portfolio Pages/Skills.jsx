import React from 'react'
import name from '../assets/name.png'
import cplus from '../assets/c++.jpg'
import boot from  '../assets/boot.png'
import database from '../assets/da.jpg'
import hc from '../assets/hc.jpg'
import java from '../assets/ja.png'
import jsp from '../assets/jsp.png'
import python from '../assets/python.png'
import react from '../assets/re.png'
import tailwind from '../assets/tail.png'
import js from '../assets/js.png'
import node from '../assets/node.png'

export const Skills = () => {
  return (
    <>
    <section className='flex flex-col md:flex-row ' id='skill'>
        <div className='flex flex-col md:flex-row w-full '>
        <img src={name} className='w-full md:w-1/2' />
        <div className='grid w-full md:w-1/2 grid-cols-5 md:grid-cols-3 gap-4 p-4'>
            <img src={cplus} className='max-h-20 max-w-20' />
            <img src={boot} className='max-h-20 max-w-20' />
            <img src={tailwind} className='max-h-20 max-w-20' />
            <img src={hc} className='max-h-20 max-w-20' />
            <img src={java} className='max-h-20 max-w-20' />
            <img src={python} className='max-h-20 max-w-20' />
            <img src={jsp} className='max-h-20 max-w-20' />
            <img src={database} className='max-h-20 max-w-20'/>
            <img src={node} className='max-h-20 max-w-20'/>
            <img src={js} className='max-h-20 max-w-20'/>
            <img src={react} className='max-h-24 max-w-24' />
        </div>
        </div>
    </section>
    </>
  )
}
