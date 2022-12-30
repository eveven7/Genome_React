import React, { useState } from 'react'
import { SiMicrogenetics } from "react-icons/si";

import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div name='top' className='navbar'>
            <div className="container">
                <a href='/' className="logo">
                    <SiMicrogenetics className='icon' />
                    <h1 className='title'>Gene</h1>
                </a>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'><Link to='/recovery'>Diagnostic</Link> </li>
                    <li className='nav-item'><Link to='/cloud'>Research & innovation</Link></li>
                    <li className='nav-item'><Link to='/contact'>Contact</Link></li>
                    <button>Sign in</button>
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
