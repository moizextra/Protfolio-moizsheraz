import React from 'react'
import {BsTwitter} from "react-icons/bs";
import {AiFillGithub} from "react-icons/ai";
import {GrLinkedinOption} from "react-icons/gr";
import {FaFacebook} from "react-icons/fa";
import {MdWork} from "react-icons/md";


const Profile = () => {
  return (
    <div className='sidebar ' >
    <div  className='  profile  flex flex-col mt-10 ml-10  items-center justify-between profile p-8 '>
<div className='flex items-center justify-between  w-64'>
    <h1 className='lg:text-3xl sm:text-xl font-bold'>
      Moiz 
    </h1>
    <span className='font-serif'>
Frontend Developer <br/>& Student
    </span>
</div>
<div className=''>
    <img  draggable="false" style={{"width": "167px",
    "height": "167px", borderRadius: "50%",border:"5px solid #2272FF"}}  className=""src="./moiz.jpg" alt="" />
</div>

<div className='flex flex-col  font-serif'>
    <span className='text-center'>moiz77131@gmail.com</span>
    <span>Base in Islamabad,Pakistan</span>
</div>


<div className='' >
    <span>© 2023 Moiz.All Rights Reserved</span>
</div>
<div className='icons flex '>
<button className='btnbs border rounded-xl p-4 m-3'><a href=""><BsTwitter/></a></button>
<button className='btnai border rounded-xl p-4 m-3'><a href="https://github.com/abdulmoizsheraz"><AiFillGithub/></a></button>
<button className='btngr border rounded-xl p-4 m-3'><a href="https://www.linkedin.com/in/moiz-sheraz-218117229/"><GrLinkedinOption/></a></button>
<button className='btnfa border rounded-xl p-4 m-3'><a href=""><FaFacebook/></a></button>
</div>
    <button  className='hireme border w-full rounded-xl flex items-center justify-center p-3 '><MdWork className='mr-3'/>Resume</button>
    </div>
    </div>
  )
}

export default Profile