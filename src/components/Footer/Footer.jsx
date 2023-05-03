import React from 'react';
import './Footer.css'
import logos from '../../assets/images/logos .png'
import { FaYoutube, FaFacebook, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer>

                <div className=' footer-bg '>
                    <br />
                    <h2>Chef By Nature</h2>
                    <br />
                    <div className='d-flex mx-auto p-3 logos-bg'>
                        <img src={logos} alt="" />
                        <img src={logos} alt="" />
                        <img src={logos} alt="" />
                    </div>
                    <br />
                    <div className=' mx-5 px-5'>
                        <div>
                            {/* <h6>Find and follow us on</h6> */}

                            <a href=""><FaTwitterSquare className='social-icons' /></a>
                            <a href=""><FaYoutube className='social-icons' /></a>
                            <a href=""><FaFacebook className='social-icons' /></a>
                            <a href=""><FaLinkedin className='social-icons' /></a>
                        </div>

                        <br />
                        <p>Each recipe page includes a clear and concise list of ingredients, step-by-step instructions, and a photo of the finished dish. Users can also leave comments and ratings on each recipe, allowing others to see how successful they were in replicating the dish.</p>
                    </div>
                    <br />

                    <p>Copywrite of this website</p>
                    <br />
                    <br />
                </div>
            </footer>
        </div>
    );
};

export default Footer;