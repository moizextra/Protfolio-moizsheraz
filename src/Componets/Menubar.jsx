import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {RiContactsLine} from "react-icons/ri"
import {MdWorkOutline} from "react-icons/md"
import {SiTalenthouse} from "react-icons/si"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
import {AiOutlineMessage} from "react-icons/ai"
const Menubar = () => {
  return (
    <div className=' navbar flex justify-center items-center  text-white w-full fixed top-0 '>
<AiOutlineHome color='white'  className="m-2  "size={40}/>
<RiContactsLine color='white' className="m-2"  size={40}/>
<MdWorkOutline color='white' className="m-2" size={40}/>
<SiTalenthouse color='white' className="m-2" size={40}/>
<AiOutlineFundProjectionScreen color='white' className="m-2" size={40}/>
<AiOutlineMessage color='white' className="m-2" size={40}/>

    </div>
  )
}

export default Menubar