import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {RiContactsLine} from "react-icons/ri"
import {MdWorkOutline} from "react-icons/md"
import {SiTalenthouse} from "react-icons/si"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
import {AiOutlineMessage} from "react-icons/ai"
const Menubar = () => {
  return (
    <div className=' flex flex-col justify-center items-center h-80 w-12 rounded-full border p-3 mt-36 '>
<AiOutlineHome color='white'  className="my-2"size={20}/>
<RiContactsLine color='white' className="my-2"  size={20}/>
<MdWorkOutline color='white' className="my-2" size={20}/>
<SiTalenthouse color='white' className="my-2" size={20}/>
<AiOutlineFundProjectionScreen color='white' className="my-2" size={20}/>
<AiOutlineMessage color='white' className="my-2" size={20}/>

    </div>
  )
}

export default Menubar