import React from 'react';
import JatriProject from '../../assets/Jatri.png'
import TechGigsProject from '../../assets/TechGigs.png'
import CareerFindProject from '../../assets/CareerFind.png'
import { FiCheckCircle } from "react-icons/fi";
import { Link } from 'react-router';

const Projects = () => {
    return (
        <div id="projects" data-aos="fade-down-right" className='max-w-7xl mx-10 lg:mx-auto text-[#2C1250] space-y-5 mb-20'>
          <h1 className='text-6xl font-extrabold text-[#D9D9D9] text-left'>Projects</h1>
           <div className='mt-20 space-y-5'>
            <div className='bg-gradient-to-r from-purple-100 to-purple-200 p-4 rounded-3xl shadow-xl flex flex-col md:flex-row gap-10 items-center hover:scale-[1.01] transition-transform duration-300'>
                <div className="lg:w-1/2">
                    <img 
                    className="w-full h-full rounded-xl shadow-lg "
                    src={JatriProject} 
                    alt="Jatri Project Preview" 
                    />
                </div>
                <div className='text-left space-y-2 md:w-1/2 w-full'>
                    <h1 className='text-6xl font-extrabold text-purple-800'>Jatri 🚗</h1>
                    <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-700">
                    Jatri is a car rental website that allows users to smoothly add and rent cars with a user-friendly interface.
                    </p>

                    <div>
                    <h2 className='text-3xl font-bold text-purple-900 mb-3'>Core Features</h2>
                    <ul className="space-y-2 text-lg md:text-xl font-medium text-gray-800">
                        <li className='flex gap-3 items-center'><FiCheckCircle className="text-purple-600"/> Rent a car</li>
                        <li className='flex gap-3 items-center'><FiCheckCircle className="text-purple-600"/> Track a car's booking count</li>
                        <li className='flex gap-3 items-center'><FiCheckCircle className="text-purple-600"/> Searching and sorting by name and car price</li>
                    </ul>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-5">
                    <a href="https://jatri-9cc51.web.app/" target="_blank" rel="noopener noreferrer">
                        <button className='cursor-pointer bg-purple-700 hover:bg-purple-900 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                        🚀 Live Site
                        </button>
                    </a>

                    <a href="https://github.com/nusratmomita/Jatri_Client" target="_blank" rel="noopener noreferrer">
                        <button className='cursor-pointer bg-[#2C1250] text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                        💻 GitHub Repo
                        </button>
                    </a>
                    <Link to='/jatriDetails'>
                        <button className='cursor-pointer bg-[#CCD6F6] text-purple-800 border-2 border-purple-700 px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-purple-100 transition-all duration-300 transform hover:-translate-y-1'>
                            🔍 Details
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-r from-purple-100 to-purple-200 p-4 rounded-3xl shadow-xl flex flex-col-reverse md:flex-row-reverse gap-10 items-center hover:scale-[1.01] transition-transform duration-300'>
                <div className="lg:w-1/2">
                    <img 
                    className="w-full h-full rounded-xl shadow-lg "
                    src={TechGigsProject} 
                    alt="TechGigs Project Preview" 
                    />
                </div>
                <div className='text-left space-y-2 md:w-1/2 w-full'>
                    <h1 className='text-6xl font-extrabold text-purple-800'>TechGigs 📝</h1>
                    <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-700">
                    TechGigs is a freelancing task management side that helps users to find,bid and earn money by completing tasks.
                    </p>

                    <div>
                    <h2 className='text-3xl font-bold text-purple-900 mb-3'>Core Features</h2>
                    <ul className="space-y-2 text-xl md:text-2xl font-medium text-gray-800">
                        <li className='flex gap-3 items-center'><FiCheckCircle className="text-purple-600"/> Bid For any task</li>
                        <li className='flex gap-3 items-center'><FiCheckCircle className="text-purple-600"/> Add,Delete and Update tasks</li>
                        <li className='flex gap-3 items-center'><FiCheckCircle className="text-purple-600"/> Dashboard for managing tasks effectively</li>
                    </ul>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-5">
                    <a href="https://techgigs-79204.web.app/" target="_blank" rel="noopener noreferrer">
                        <button className='cursor-pointer bg-purple-700 hover:bg-purple-900 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                        🚀 Live Site
                        </button>
                    </a>

                    <a href="https://github.com/nusratmomita/TechGigs_Client" target="_blank" rel="noopener noreferrer">
                        <button className='cursor-pointer bg-[#2C1250] text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                        💻 GitHub Repo
                        </button>
                    </a>
                    <Link to='/TechGigsDetails'>
                        <button className='cursor-pointer bg-[#CCD6F6] text-purple-800 border-2 border-purple-700 px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-purple-100 transition-all duration-300 transform hover:-translate-y-1'>
                            🔍 Details
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-r from-purple-100 to-purple-200 p-4 rounded-3xl shadow-xl flex flex-col md:flex-row gap-10 items-center hover:scale-[1.01] transition-transform duration-300'>
                <div className="lg:w-1/2">
                    <img 
                        className="w-full h-full rounded-xl shadow-lg "
                        src={CareerFindProject} 
                        alt="CareerFind Project Preview" 
                    />
                </div>
                <div className='text-left space-y-2 md:w-1/2 w-full'>
                    <h1 className='text-6xl font-extrabold text-purple-800'>CareerFind 🔍</h1>
                    <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-700">
                    CareerFind site helps you to find your dream career with trusted and renowned companies help. 
                    </p>

                    <div>
                    <h2 className='text-3xl font-bold text-purple-900 mb-3'>Core Features</h2>
                    <ul className="space-y-2 text-xl md:text-2xl font-medium">
                        <li className='flex gap-3 items-center'><FiCheckCircle className="text-purple-600"/> Find job</li>
                        <li className='flex gap-3 items-center'><FiCheckCircle className="text-purple-600"/> See details of job</li>
                        <li className='flex gap-3 items-center'><FiCheckCircle className="text-purple-600"/> Authentication and Private route</li>
                    </ul>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-5">
                    <a href=" https://careerfind-568f3.web.app" target="_blank" rel="noopener noreferrer">
                        <button className='cursor-pointer bg-purple-700 hover:bg-purple-900 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                        🚀 Live Site
                        </button>
                    </a>

                    <a href="https://github.com/nusratmomita/CareerFind" target="_blank" rel="noopener noreferrer">
                        <button className='cursor-pointer bg-[#2C1250] text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                        💻 GitHub Repo
                        </button>
                    </a>
                    <Link to='/careerFind'>
                        <button className='cursor-pointer bg-[#CCD6F6] text-purple-800 border-2 border-purple-700 px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-purple-100 transition-all duration-300 transform hover:-translate-y-1'>
                            🔍 Details
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Projects;