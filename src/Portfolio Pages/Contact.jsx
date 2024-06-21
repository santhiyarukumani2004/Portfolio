import React, { useState } from 'react'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export const Contact = () => {
  const config = {
    contact:[
      {
        icon:<MdOutlineAlternateEmail/>,
        email:'',
        mobile_no:''
      }
    ]
  }
  const [email,setEmail] = useState('santhiyarukumani2004@gmail.com')
  const [phoneno,setphoneno] = useState('9344538487')
  return (
    <section className=' flex flex-col   text-white justify-center gap-10 p-10 bg' id='contact'>
   <div className="flex flex-col justify-center items-center py-5">
    <h1 class=" font-bold text-nowrap text-4xl py-3 border-b-2 border-white w-[150px]">Contact
    </h1>
    <br />
    <p className='w-full pb-2 text-center py-3'>
      If you want to discuss more detail,please contact me
    </p>
    <p className='py-6 flex gap-2'>
      <span><MdOutlineAlternateEmail className='text-xl' /></span>
      <span className='font-bold'>Email:</span>{email}
    </p>
     <p className='flex gap-2'>
     <span><FaPhoneAlt  className='text-xl' /></span>
      <span className='font-bold'>Phone:</span>{phoneno}
     </p>
     <button className='bg text-white w-32 h-10 rounded-md hover:opacity-50'>
     <a href=""className='w-full h-full flex items-center justify-center'>
       </a>
     </button>
    </div> 
  </section>
  )
}
