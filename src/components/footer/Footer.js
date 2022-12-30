import React from 'react'
import { SiMicrogenetics } from "react-icons/si";
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { FiMail, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi'
import './FooterStyles.css'

import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                        <SiMicrogenetics className='icon' />
                        <h2> Gene</h2>
                    </div>
                    <a href="#"
                     class="call"><BsFillArrowUpCircleFill className='icon' /></a>
                      
                    

                </div>
                <div className="col-container">
                    <div className="col">
                        <h3>Home</h3>
                        <p>Gene Diganostics</p>
                        <p>Gene Technology</p>
                        <p>Medical Equipment</p>
                    </div>
                    <div className="col">
                        <h3>Overview</h3>
                        <p>Contact us</p>
                        <p>Our Story</p>

                    </div>
                    <div className="col">
                        <h3>Services</h3>
                        <p>Employers</p>
                        <p>Health Systems</p>
                        <p>Medical Providers</p>
                    </div>


                    <form>
                        <h3>Subscribe to our newsletters</h3>

                        <input type="email" placeholder='Enter your email' />
                        <FiMail className='mail-icon' />
                    </form>
                </div>
                <div className="wrapper">
                    <div class="button">
                        <div class="icon">
                            <i>  <FiInstagram className='social-icon-ig' /></i>
                        </div>
                        <span>Instagram</span>
                    </div>

                    <div class="button">
                        <div class="icon">
                            <i>  <FiFacebook className='social-icon-fb' />
                            </i>
                        </div>
                        <span>Facebook</span>
                    </div>

                    <div class="button">
                        <div class="icon">
                            <i>  <FiTwitter className='social-icon-tw' /></i>
                        </div>
                        <span>Twitter</span>
                    </div>

                    <div class="button">
                        <div class="icon">
                            <i>  <FiLinkedin className='social-icon-ln' /></i>
                        </div>
                        <span>LinkedIn</span>
                    </div>

                    <div class="button">
                        <div class="icon">
                            <i>  <FiYoutube className='social-icon-yt' /></i>
                        </div>
                        <span>YouTube</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer