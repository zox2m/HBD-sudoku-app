import React from 'react'
import { PiCakeFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">KimSuDoKu</div>
        <div className="navLinks">
            <ul>
                <li><a href='https://www.instagram.com/sss._.jjjin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank' rel='noreferrer'><PiCakeFill /> </a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar