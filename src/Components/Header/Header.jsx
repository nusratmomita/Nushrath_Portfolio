import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`navbar ${scrolled ? 'bg-[#693B93]/95 backdrop-blur-md shadow-lg' : 'bg-[#693B93]'} text-[#D9D9D9] p-4 lg:p-6 fixed top-0 z-50 transition-all duration-300`}>
            <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
                {/* Logo Section */}
                <div className="navbar-start">
                    {/* Mobile Menu Button */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-purple-800/50 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white text-[#693B93] rounded-2xl z-50 mt-3 w-60 p-3 shadow-2xl border border-purple-100">
                            <a href="#aboutMe" className="hover:bg-purple-50 rounded-xl transition-colors p-3">
                                <li className='text-lg font-semibold flex items-center gap-2'>
                                    <span className="text-xl">👤</span> About Me
                                </li>
                            </a>
                            <a href="#skills" className="hover:bg-purple-50 rounded-xl transition-colors p-3">
                                <li className='text-lg font-semibold flex items-center gap-2'>
                                    <span className="text-xl">⚡</span> Skills
                                </li>
                            </a>
                            <a href="#education" className="hover:bg-purple-50 rounded-xl transition-colors p-3">
                                <li className='text-lg font-semibold flex items-center gap-2'>
                                    <span className="text-xl">🎓</span> Education
                                </li>
                            </a>
                            <a href="#projects" className="hover:bg-purple-50 rounded-xl transition-colors p-3">
                                <li className='text-lg font-semibold flex items-center gap-2'>
                                    <span className="text-xl">💼</span> Projects
                                </li>
                            </a>
                            <a href="#contactMe" className="hover:bg-purple-50 rounded-xl transition-colors p-3">
                                <li className='text-lg font-semibold flex items-center gap-2'>
                                    <span className="text-xl">📧</span> Contact Me
                                </li>
                            </a>
                        </ul>
                    </div>
                    
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <span className="text-4xl group-hover:scale-110 transition-transform duration-300">👩‍💻</span>
                        <h1 className='text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:to-white transition-all duration-300'>
                            Nushrath
                        </h1>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <a href="#aboutMe" className="group relative">
                            <li className='px-4 py-2 text-lg font-medium hover:text-white transition-colors duration-300 cursor-pointer'>
                                About Me
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-300 to-white group-hover:w-full transition-all duration-300"></span>
                            </li>
                        </a>
                        <a href="#skills" className="group relative">
                            <li className='px-4 py-2 text-lg font-medium hover:text-white transition-colors duration-300 cursor-pointer'>
                                Skills
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-300 to-white group-hover:w-full transition-all duration-300"></span>
                            </li>
                        </a>
                        <a href="#education" className="group relative">
                            <li className='px-4 py-2 text-lg font-medium hover:text-white transition-colors duration-300 cursor-pointer'>
                                Education
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-300 to-white group-hover:w-full transition-all duration-300"></span>
                            </li>
                        </a>
                        <a href="#projects" className="group relative">
                            <li className='px-4 py-2 text-lg font-medium hover:text-white transition-colors duration-300 cursor-pointer'>
                                Projects
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-300 to-white group-hover:w-full transition-all duration-300"></span>
                            </li>
                        </a>
                        <a href="#contactMe">
                            <li className='ml-2 px-6 py-2 text-lg font-semibold bg-white text-[#693B93] rounded-xl hover:bg-purple-100 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl'>
                                Contact Me
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;