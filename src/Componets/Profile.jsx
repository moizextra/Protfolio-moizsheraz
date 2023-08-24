import React from 'react'
import {BsTwitter} from "react-icons/bs";
import {AiFillGithub} from "react-icons/ai";
import {GrLinkedinOption} from "react-icons/gr";
import {FaFacebook} from "react-icons/fa";
import {MdWork} from "react-icons/md";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Profile = () => {
    const linkedInPosts = [
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7094712835401818114",
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7091788126544691200",
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7082065250086248448"
        // Add more LinkedIn embedded post URLs
      ];
  return (
    <>
    <section className='flex flex-col '>
    <div className='profileContainer'>
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
    <div className=" sharing carousel-container mt-9 ml-5 ">
        <h1 className='lg:text-xl text-center mb-2 leading-normal font-serif intropara font-bold flex items-center justify-center' style={{"color":"#2272FF"}}>My Sharings and Learnings <GrLinkedinOption/></h1>
      <Carousel borderRadius="50px">
        {linkedInPosts.map((postUrl, index) => (
          <div key={index} className="carousel-item">
            <iframe
              src={postUrl}
              height="800" width="700"
               frameborder="10px"
borderRadius="30px"
              allowFullScreen
              title={`LinkedIn Post ${index}`}
            ></iframe>
          </div>
        ))}
      </Carousel>
    </div>
    </section>
    </>
  )
}

export default Profile