import React from 'react'
import insta from '../images/instagram.png';
import meta from '../images/meta.png';
import twt from '../images/twitter.png';
import '../styles/navbar.css'

export const Navbar = () => {
    return (
        <div>
            <div className="top">
                <div className="contact">
                    +91 9128472023
                </div>
                <div className="socials">
                    {/* links */}
                    <img src={meta} className='social' alt="" />
                    <img src={insta} className='social' alt="" />
                    <img src={twt} className='social' alt="" />
                </div>
            </div>
            <nav>
                <div className="logo">Fitness Gym</div>
                <div className="links">
                    <p className="link">Home</p>
                    <p className="link">About</p>
                    <p className="link">Contact</p>
                    <p className="link">Blog</p>
                </div>
            </nav>
        </div>
    )
}
