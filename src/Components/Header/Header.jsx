import React from 'react';

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
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li className='text-3xl'>About Me</li>
                    <li className='text-3xl'>Skills</li>
                    <li className='text-3xl'>Education</li>
                    <li className='text-3xl'>Projects</li>
                    <li className='text-3xl'>Contact Me</li>
                </ul>
                </div>
                <h1 className="text-2xl p-2">Nushrath</h1>
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