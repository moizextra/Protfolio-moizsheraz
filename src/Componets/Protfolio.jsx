import React from 'react'
import {AiOutlineFundProjectionScreen} from "react-icons/ai"

const Protfolio = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-4'>
       <span className='border px-4 py-1 rounded-full text-center flex items-center justify-center mb-3'><AiOutlineFundProjectionScreen/><span className='ml-3'>Protfolio</span></span>
     <span style={{"color":"#d4d483"}} className=' text-3xl  mb-7 mt-10 leading-normal font-serif'>"I believe that Work speaks louder than Certifications." 💪🔥</span>
    </div>
  )
}

export default Protfolio