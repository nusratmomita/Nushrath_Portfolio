import React, { useState } from 'react';
import { FiLinkedin } from "react-icons/fi";
import { FaDownload, FaFileAlt, FaGithub } from "react-icons/fa";
import { TbCodeCircle2 } from "react-icons/tb";
import profile from '../../assets/profilePic.png'

const Banner = () => {
    const [mouseHovered , setMouseHovered] = useState(false);

    return (
        <div className='max-w-7xl mx-10 lg:mx-auto mt-20 mb-20 rounded-4xl flex items-center justify-center bg-[url(assets/bannerImage.png)] '>
            <div className='flex flex-col-reverse lg:flex-row gap-20 lg:gap-50 justify-center items-center p-10'>
                <div className='text-[#2C1250] space-y-5'>
                    <h1 className='text-4xl font-extrabold'>Hi, I am Nushrath Momita Hussain</h1>
                    <p className='text-3xl font-medium' >
                        I'm a passionate Frontend Developer based in 📍 <span className='italic'>Bangladesh</span>, 
                        with a strong interest in building modern & responsive websites. 
                        Currently exploring the MERN stack to expand my development skills. 
                        I strive to create user-centric, scalable solutions that make a real impact.
                    </p>
                    <h1 className='text-4xl font-bold'>Find me on</h1>
                    <div className='mt-8 flex gap-4'>
                        <a href="https://www.linkedin.com/in/nushrathmomita/" target='_blank'><FiLinkedin size={35} className="-mt-5 bg-[#b2c1f5] rounded-2xl w-12 h-12 p-2"></FiLinkedin></a>
                        <a href="https://github.com/nusratmomita" target='_blank'><FaGithub size={35} className="-mt-5 bg-[#b2c1f5] rounded-2xl w-12 h-12 p-2"></FaGithub></a>
                        <a href="https://codolio.com/profile/nusrat" target='_blank'><TbCodeCircle2 size={35} className="-mt-5 bg-[#b2c1f5] rounded-2xl w-12 h-12 p-2"></TbCodeCircle2></a>
                    </div>

                    <button
                        href='/Nushrath Momita Hussain Full-stack Developer resume.pdf'
                        download="resume.pdf"
                        onMouseEnter={() => setMouseHovered(true)}
                        onMouseLeave={() => setMouseHovered(false)} >
                        {
                            mouseHovered ? 
                            <div className='w-[140px] mt-8 cursor-pointer flex gap-2 justify-center items-center bg-[#2C1250] text-[#D9D9D9] font-bold text-2xl p-3 rounded-4xl'>
                                <span>Download</span>
                                <FaDownload className="transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                            :
                            <div className='w-[140px] mt-8 cursor-pointer flex gap-2 justify-center items-center bg-[#2C1250] text-[#D9D9D9] font-bold text-2xl p-3 rounded-4xl'>
                                <FaFileAlt className="transition-transform duration-300 group-hover:-translate-x-1" />
                                <span>Resume</span>
                            </div>
                        }

                    </button>
                </div>
                <img className="w-90 h-90 rounded-full"src={profile} alt="nusrat" />
            </div>
        </div>
    );
};

export default Banner;