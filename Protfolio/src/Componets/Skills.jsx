import React from 'react'
import {SiTalenthouse} from "react-icons/si";
import {FaReact} from "react-icons/fa"
import {SiTailwindcss} from "react-icons/si"
import {SiNextdotjs} from "react-icons/si"
import {TbBrandRedux} from "react-icons/tb"
import {GrNode} from "react-icons/gr"
import {SiTypescript} from "react-icons/si"
const Skills = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-4'>
       <span className='border px-4 py-1 rounded-full text-center flex items-center justify-center mb-12'><SiTalenthouse/> <span className='ml-3'>Skills</span></span>
       <div className='flex flex-wrap'>
       <div className='flex roundcustom m-2 customborderaduis flex-col w-48 justify-center items-center border  p-9 '>
        <span className='text-4xl mb-2'>React</span>
        <FaReact size={100}/>
       </div>
       <div className='flex roundcustom  m-4 flex-col customborderaduis w-48 justify-center items-center border  p-9'>
        <span className='text-4xl mb-2'>Tailwind</span>
        <SiTailwindcss size={100}/>
       </div>
       <div className='flex roundcustom  m-4 flex-col customborderaduis  w-48 justify-center items-center border  p-9'>
        <span className='text-4xl mb-2'>Redux</span>
        <TbBrandRedux size={100}/>
       </div>
       <div className='flex roundcustom flex-col m-4 customborderaduis w-48 justify-center items-center border  p-9'>
        <span className='text-4xl mb-2'>Node</span>
        <GrNode size={100}/>
       </div>
       <div className='flex roundcustom flex-col m-4 customborderaduis  w-48 justify-center items-center border  p-9'>
        <span className='text-4xl mb-2'>Next</span>
        <SiNextdotjs size={100}/>
       </div>
       <div className='flex roundcustom flex-col m-4 customborderaduis  w-48 justify-center items-center border  p-9'>
        <span className='text-4xl mb-2'>Typescript</span>
        <SiTypescript size={100}/>
       </div>
       </div>
    </div>
  )
}

export default Skills