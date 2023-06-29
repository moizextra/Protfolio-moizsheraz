import React from 'react'
import {RiContactsLine} from "react-icons/ri"
const About = () => {
  return (
    <div className='flex flex-col items-center justify-center '>
 <span className='border px-4 py-1 rounded-full text-center flex items-center justify-center font-bold'><RiContactsLine/> <span className='ml-3'>About</span></span>
        <p className='mt-10 mb-5 text-gray-300 font-bold'>Hello, I'm Abdul Moiz Sheraz, currently pursuing a Bachelor's degree in Computer Science at UET Taxila. As a first-year student, I'm eager to dive into the world of software development and explore its endless possibilities. I have a strong command of languages like JavaScript and Java, and I'm particularly proficient in working with the MERN stack, utilizing technologies like React for building dynamic and responsive web applications. I am motivated to continuously enhance my skills and stay up-to-date with the latest industry trends. I'm excited to apply my knowledge and contribute to meaningful projects that make a difference.</p>
    </div>
  )
}

export default About