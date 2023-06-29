import React from 'react'
import {AiOutlineHome} from "react-icons/ai"

const Introduce = () => {
  return (
    <div className='flex flex-col '>
 <span className='border px-4 py-1 rounded-full text-center flex justify-center items-center'><AiOutlineHome/><span className='ml-3'>Introduce</span></span>
        <span className='text-6xl text-left mb-7 mt-10 leading-normal font-serif'>Hi there &#128075; ! I am <span style={{"color":"#d4d483"}}>Moiz</span>,<br/> Developer and <br/> Student </span><br/>
    </div>
  )
}

export default Introduce