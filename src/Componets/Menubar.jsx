import React from 'react'
import { Link } from 'react-scroll';
import {AiOutlineHome} from "react-icons/ai"
import {RiContactsLine} from "react-icons/ri"
import {MdWorkOutline} from "react-icons/md"
import {SiTalenthouse} from "react-icons/si"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
import {AiOutlineMessage} from "react-icons/ai"
const Menubar = () => {
  return (
    <div className=' navbar flex justify-center items-center  text-white w-full fixed top-0 '>
 <Link
        to="Home"
        className='cursor-pointer'
        spy={true}
        smooth={true}
        offset={-70} // Offset aapke navigation bar ya header ki height ke hisab se adjust karein
        duration={500}

      ><AiOutlineHome color='white'  className="m-2  "size={40}/></Link>
 <Link
        to="About"
        spy={true}
        className='cursor-pointer'
        smooth={true}
        offset={-100} // Offset aapke navigation bar ya header ki height ke hisab se adjust karein
        duration={500}
      ><RiContactsLine color='white' className="m-2"  size={40}/></Link>
 <Link
        to="skills"
        spy={true}
        className='cursor-pointer'
        smooth={true}
        offset={-100} // Offset aapke navigation bar ya header ki height ke hisab se adjust karein
        duration={500}
      ><SiTalenthouse color='white' className="m-2" size={40}/></Link>

<Link
        to="projects"
        spy={true}
        className='cursor-pointer'
        smooth={true}
        offset={-150} // Offset aapke navigation bar ya header ki height ke hisab se adjust karein
        duration={500}
      ><AiOutlineFundProjectionScreen color='white' className="m-2" size={40}/></Link>
<Link
        to="contact"
        spy={true}
        className='cursor-pointer'
        smooth={true}
        offset={-150} // Offset aapke navigation bar ya header ki height ke hisab se adjust karein
        duration={500}
      ><AiOutlineMessage color='white' className="m-2" size={40}/></Link>

    </div>
  )
}

export default Menubar