import React,{useState} from 'react'
import Projects from "./Projects"
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
const Protfolio = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center mt-4'>
        <span className='border px-4 py-1 mb-5 rounded-full text-center flex items-center justify-center '><AiOutlineFundProjectionScreen /><span className='ml-3'>Work</span></span>
     <Projects/>
      </div>
    </>
  )
}

export default Protfolio