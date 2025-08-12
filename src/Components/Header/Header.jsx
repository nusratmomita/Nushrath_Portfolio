import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className="navbar bg-[#693B93] text-[#D9D9D9] shadow-sm p-6 fixed top-0 z-20 ">
            <div className="navbar-start">
                {/* Small screen */}
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-[#CCD6F6] text-[#251C31] rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <a href="#aboutMe"><li className='text-2xl'>About Me</li></a>
                        <a href="#skills"><li className='text-2xl'>Skills</li></a>
                        <a href="#education"><li className='text-2xl'>Education</li></a>
                        <a href="#projects"><li className='text-2xl'>Projects</li></a>
                        <a href="#contactMe"> <li className='text-2xl'>Contact Me</li></a>
                </ul>
                </div>
                <h1 className='text-3xl'>👩‍💻Nushrath</h1>
            </div>
            {/* Large screen */}
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <a href="#aboutMe"><li className='text-2xl'>About Me</li></a>
                    <a href="#skills"><li className='ml-5 text-2xl'>Skills</li></a>
                    <a href="#education"><li className='ml-5 text-2xl'>Education</li></a>
                    <a href="#projects"><li className='ml-5 text-2xl'>Projects</li></a>
                    <a href="#contactMe"> <li className='ml-5 text-2xl'>Contact Me</li></a>
                </ul>
            </div>
        </div>
    );
};

export default Header;