import React from 'react'
import {BsTwitter} from "react-icons/bs";
import {AiFillGithub} from "react-icons/ai";
import {GrLinkedinOption} from "react-icons/gr";
import {FaFacebook} from "react-icons/fa";
import {MdWork} from "react-icons/md";


const Profile = () => {
  return (
    <section className='sidebar'>
    <div  className='  profile  flex flex-col mt-10 ml-10  items-center profile p-8'>
<div className='flex items-center justify-between  w-64'>
    <h1 className='text-3xl font-bold'>
      Moiz 
    </h1>
    <span className='font-serif'>
Frontend Developer <br/>& Student
    </span>
</div>
<div className='mt-7 mb-7'>
    <img  draggable="false" style={{"width": "258px",
    "height": "150px",borderRadius:"12px"}} src="./moiz.jpg" alt="" />
</div>
<div className='flex flex-col mb-7 font-serif'>
    <span className='text-center'>moiz77131@gmail.com</span>
    <span>Base in Islamabad,Pakistan</span>
</div>
<div className='mb-7'>
    <span>© 2023 Moiz.All Rights Reserved</span>
</div>
<div className='icons flex mb-7 '>
<button className='btnbs border rounded-xl p-4 m-3'><BsTwitter/></button>
<button className='btnai border rounded-xl p-4 m-3'><AiFillGithub/></button>
<button className='btngr border rounded-xl p-4 m-3'><GrLinkedinOption/></button>
<button className='btnfa border rounded-xl p-4 m-3'><FaFacebook/></button>
</div>
    <button  className=' hireme border w-full rounded-xl flex items-center justify-center p-3 '><MdWork className='mr-3'/>Hire ME!</button>
    </div>
    </section>
  )
}

export default Profile