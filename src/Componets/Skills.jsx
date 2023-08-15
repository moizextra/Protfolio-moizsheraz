import React, { useState } from 'react'
import {SiTalenthouse} from "react-icons/si";
import {FaReact} from "react-icons/fa"
import {SiTailwindcss} from "react-icons/si"
import {SiNextdotjs} from "react-icons/si"
import {TbBrandRedux} from "react-icons/tb"
import {GrNode} from "react-icons/gr"
import {SiTypescript} from "react-icons/si"
import {BsGit} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"
import {AiOutlineDatabase} from "react-icons/ai"
import {SiThealgorithms} from "react-icons/si"
import {BsFillHddNetworkFill} from "react-icons/bs"
import {FaJava} from "react-icons/fa"
const Skills = () => {
  const [selectedItem,setSelectedItem]=useState(false)
  const handleSelect = (itemId) => {
    setSelectedItem(itemId === selectedItem ? null : itemId);
  };
  return (
    <div className='flex flex-col justify-around items-center' id='skills'>
       <span className='border px-4 py-1 rounded-full text-center mb-3 mt-3 flex items-center justify-center skillstag'><SiTalenthouse/> <span className='ml-3'>Skills</span></span>
       <ul className=' projectsoption flex justify-center items-center' data-aria-orientation='horizantal' >
       <li
        className={`lg: text-xs text-center m-3 p-1 cursor-pointer sm:text-sm ${selectedItem === 'Industry' ? 'border-b-4 border-blue-500 rounded-full ' : ''}`}
        onClick={() => handleSelect('Industry')}
      >
  Industry Knowledge
</li>
       <li
        className={`lg: text-xs m-3 p-1 text-center cursor-pointer sm:text-sm ${selectedItem === 'tools' ? 'border-b-4 border-blue-500 rounded-full' : ''}`}
        onClick={() => handleSelect('tools')}
      >
 Tools and Technology
</li>

        </ul>
    { selectedItem === 'tools' ? <div className=' skillsdiv flex justify-around flex-wrap'  data-aos="fade-up">
       <div className=' skill flex roundcustom m-2 customborderaduis flex-col w-48 justify-center items-center border  p-9 '>
        <span className='text-4xl skillname'>React</span>
        <FaReact size={100}/>
       </div>
       <div className=' skill flex roundcustom  m-4 flex-col customborderaduis w-48 justify-center items-center border  p-9'>
        <span className='text-4xl skillname'>Tailwind</span>
        <SiTailwindcss size={100}/>
       </div>
       <div className=' skill flex roundcustom  m-4 flex-col customborderaduis  w-48 justify-center items-center border  p-9'>
        <span className='text-4xl  skillname'>Redux</span>
        <TbBrandRedux size={100}/>
       </div>
       <div className=' skill flex roundcustom flex-col m-4 customborderaduis w-48 justify-center items-center border  p-9'>
        <span className='text-4xl skillname'>Node</span>
        <GrNode size={100}/>
       </div>
       <div className=' skill flex roundcustom flex-col m-4 customborderaduis  w-48 justify-center items-center border  p-9'>
        <span className='text-4xl skillname'>Next</span>
        <SiNextdotjs size={100}/>
       </div>
       <div className=' skill flex roundcustom flex-col m-4 customborderaduis  w-48 justify-center items-center border  p-9'>
        <span className='text-4xl  skillname'>Typescript</span>
        <SiTypescript size={100}/>
       </div>
       <div className=' skill flex roundcustom flex-col m-4 customborderaduis  w-48 justify-center items-center border  p-9'>
        <span className='text-4xl  skillname'>Git</span>
        <BsGit size={100}/>
       </div>
       <div className=' skill flex roundcustom flex-col m-4 customborderaduis  w-48 justify-center items-center border  p-9'>
        <span className='text-4xl  skillname'>Github</span>
        <AiFillGithub size={100}/>
       </div>
       </div> :<div className=' skillsdiv flex justify-around flex-wrap'  data-aos="fade-up">
       <div className=' skill flex roundcustom m-2 customborderaduis flex-col w-48 justify-center items-center border  p-9 '>
        <span className='text-4xl skillname'>Data Stucture</span>
        <AiOutlineDatabase size={100} color='white'/>
       </div>
       <div className=' skill flex roundcustom m-2 customborderaduis flex-col w-48 justify-center items-center border  p-9 '>
        <span className='text-4xl skillname'>Algorithm</span>
        <SiThealgorithms size={100}/>
       </div>
       <div className=' skill flex roundcustom m-2 customborderaduis flex-col w-48 justify-center items-center border  p-9 '>
        <span className='text-4xl skillname'>Network</span>
        <BsFillHddNetworkFill size={100}/>
       </div>
       <div className=' skill flex roundcustom m-2 customborderaduis flex-col w-48 justify-center items-center border  p-9 '>
        <span className='text-4xl skillname'>OOP</span>
        <FaJava size={100}/>
       </div>
   
    
 
       </div>
       }
    </div>
  )
}

export default Skills