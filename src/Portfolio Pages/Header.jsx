import React,{useState} from 'react'
import logo from '/favicon1.png'

export const Header = () => {
//  const [menus, setmenus] = useState(['Home','About','Skills','Internship','Projects','Resume','Contact'])
 const [toggelmenu,setTogglemenu] = useState(false)
  return (
   <>
   <header className='flex justify-between p-4 bg' id='header'>
     <a href='' className='flex ml-2 font-bold 'id="name">
        <div className="" id="logo">
         <img src={logo} alt="" className='w-10 h-10 rounded-full '/>
        </div> &nbsp;
     {/* G.Santhiya */}
    </a>
    {/* md-->medium device */}
    <nav className='hidden md:block '>
    <ul className='flex justify-between text-white lap-view pt-2' id="ulmenus">            
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skill">Skills</a></li>
            <li><a href="#intern">Internship</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
     </ul>
    </nav>
    {toggelmenu && (
         <nav className='block md:hidden '>
         <ul onClick={()=>setTogglemenu(!toggelmenu)} className='flex flex-col justify-between text-white mobile-nav' id="ulmenus">
         <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skill">Skills</a></li>
            <li><a href="#intern">Internship</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
         </nav>
    )}
   {/* it makes true become false | false become true */}
    <button className="block md:hidden text-white" id="" onClick={()=>setTogglemenu(!toggelmenu)}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
    </svg>
    </button> 
   </header>
   </>
  )
}
