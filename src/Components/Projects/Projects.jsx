import React from 'react';
import JatriProject from '../../assets/Jatri.png'
import TechGigsProject from '../../assets/TechGigs.png'
import AroggoProject from '../../assets/Aroggo.png'
import { FiCheckCircle, FiExternalLink, FiGithub, FiInfo } from "react-icons/fi";
import { Link } from 'react-router';

const Projects = () => {
    return (
        <div id="projects" data-aos="fade-down-right" className='max-w-7xl mx-10 lg:mx-auto text-[#2C1250] space-y-12 mb-20'>
          {/* Header with gradient text */}
          <div className='relative'>
            <h1 className='text-6xl font-extrabold text-[#D9D9D9] text-left'>
              Projects
            </h1>
            <div className='h-2 w-32 bg-[#D9D9D9] rounded-full mt-3'></div>
          </div>

           <div className='space-y-8'>
            {/* Aroggo Project */}
            <div className='group bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl flex flex-col lg:flex-row gap-8 items-center transition-all duration-500 hover:-translate-y-2 border border-purple-100'>
                <div className="lg:w-1/2 overflow-hidden rounded-2xl relative">
                    <img 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        src={AroggoProject} 
                        alt="Aroggo Project Preview" 
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                </div>
                <div className='text-left space-y-4 w-full lg:w-1/2'>
                    <div className='flex items-center gap-3'>
                        <h1 className='text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent'>Aroggo</h1>
                        <span className='text-4xl'>🔍</span>
                    </div>
                    <p className="text-xl font-medium leading-relaxed text-gray-600">
                        Aroggo is a comprehensive medicine e-commerce platform connecting patients with trusted pharmacies and healthcare providers.
                    </p>

                    <div className='bg-gradient-to-br from-purple-50 to-purple-100/50 p-5 rounded-2xl'>
                        <h2 className='text-2xl font-bold text-purple-900 mb-4 flex items-center gap-2'>
                            <FiCheckCircle className="text-purple-600"/> Core Features
                        </h2>
                        <ul className="space-y-3 text-lg font-medium text-gray-700">
                            <li className='flex gap-3 items-start'>
                                <FiCheckCircle className="text-purple-600 mt-1 flex-shrink-0"/> 
                                <span>Users can browse medicines, view details, and securely checkout & view the payment history</span>
                            </li>
                            <li className='flex gap-3 items-start'>
                                <FiCheckCircle className="text-purple-600 mt-1 flex-shrink-0"/> 
                                <span>Sellers can view sales reports, manage medicine categories and request advertisements for products</span>
                            </li>
                            <li className='flex gap-3 items-start'>
                                <FiCheckCircle className="text-purple-600 mt-1 flex-shrink-0"/> 
                                <span>Admin have full control over user management, payment oversight, and advertisement approvals</span>
                            </li>
                        </ul>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-4">
                        <a href="https://aroggo-e998e.web.app/" target="_blank" rel="noopener noreferrer">
                            <button className='group/btn cursor-pointer bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-900 text-white px-6 py-3 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2'>
                                <FiExternalLink className='group-hover/btn:rotate-45 transition-transform duration-300'/> Live Site
                            </button>
                        </a>

                        <a href="https://github.com/nusratmomita/Aroggo-Client" target="_blank" rel="noopener noreferrer">
                            <button className='group/btn cursor-pointer bg-[#2C1250] hover:bg-[#1a0d30] text-white px-6 py-3 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2'>
                                <FiGithub className='group-hover/btn:rotate-12 transition-transform duration-300'/> GitHub Repo
                            </button>
                        </a>
                        <Link to='/AroggoDetails'>
                            <button className='group/btn cursor-pointer bg-white text-purple-800 border-2 border-purple-600 px-6 py-3 rounded-xl text-base font-semibold shadow-md hover:bg-purple-50 hover:border-purple-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2'>
                                <FiInfo className='group-hover/btn:scale-125 transition-transform duration-300'/> View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Jatri Project */}
            <div className='group bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl flex flex-col lg:flex-row-reverse gap-8 items-center transition-all duration-500 hover:-translate-y-2 border border-purple-100'>
                <div className="lg:w-1/2 overflow-hidden rounded-2xl relative">
                    <img 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        src={JatriProject} 
                        alt="Jatri Project Preview" 
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                </div>
                <div className='text-left space-y-4 w-full lg:w-1/2'>
                    <div className='flex items-center gap-3'>
                        <h1 className='text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent'>Jatri</h1>
                        <span className='text-4xl'>🚗</span>
                    </div>
                    <p className="text-xl font-medium leading-relaxed text-gray-600">
                        Jatri is a modern car rental platform that enables users to seamlessly discover, book, and manage vehicle rentals with an intuitive interface.
                    </p>

                    <div className='bg-gradient-to-br from-purple-50 to-purple-100/50 p-5 rounded-2xl'>
                        <h2 className='text-2xl font-bold text-purple-900 mb-4 flex items-center gap-2'>
                            <FiCheckCircle className="text-purple-600"/> Core Features
                        </h2>
                        <ul className="space-y-3 text-lg font-medium text-gray-700">
                            <li className='flex gap-3 items-start'>
                                <FiCheckCircle className="text-purple-600 mt-1 flex-shrink-0"/> 
                                <span>Browse and rent vehicles with real-time availability</span>
                            </li>
                            <li className='flex gap-3 items-start'>
                                <FiCheckCircle className="text-purple-600 mt-1 flex-shrink-0"/> 
                                <span>Track booking counts and rental history for each vehicle</span>
                            </li>
                            <li className='flex gap-3 items-start'>
                                <FiCheckCircle className="text-purple-600 mt-1 flex-shrink-0"/> 
                                <span>Advanced search and sorting by vehicle name, type, and price range</span>
                            </li>
                        </ul>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-4">
                        <a href="https://jatri-9cc51.web.app/" target="_blank" rel="noopener noreferrer">
                            <button className='group/btn cursor-pointer bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-900 text-white px-6 py-3 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2'>
                                <FiExternalLink className='group-hover/btn:rotate-45 transition-transform duration-300'/> Live Site
                            </button>
                        </a>

                        <a href="https://github.com/nusratmomita/Jatri_Client" target="_blank" rel="noopener noreferrer">
                            <button className='group/btn cursor-pointer bg-[#2C1250] hover:bg-[#1a0d30] text-white px-6 py-3 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2'>
                                <FiGithub className='group-hover/btn:rotate-12 transition-transform duration-300'/> GitHub Repo
                            </button>
                        </a>
                        <Link to='/jatriDetails'>
                            <button className='group/btn cursor-pointer bg-white text-purple-800 border-2 border-purple-600 px-6 py-3 rounded-xl text-base font-semibold shadow-md hover:bg-purple-50 hover:border-purple-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2'>
                                <FiInfo className='group-hover/btn:scale-125 transition-transform duration-300'/> View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* TechGigs Project */}
            <div className='group bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl flex flex-col lg:flex-row gap-8 items-center transition-all duration-500 hover:-translate-y-2 border border-purple-100'>
                <div className="lg:w-1/2 overflow-hidden rounded-2xl relative">
                    <img 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        src={TechGigsProject} 
                        alt="TechGigs Project Preview" 
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                </div>
                <div className='text-left space-y-4 w-full lg:w-1/2'>
                    <div className='flex items-center gap-3'>
                        <h1 className='text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent'>TechGigs</h1>
                        <span className='text-4xl'>📝</span>
                    </div>
                    <p className="text-xl font-medium leading-relaxed text-gray-600">
                        TechGigs is a freelancing marketplace that connects clients with skilled professionals for task-based projects and gig opportunities.
                    </p>

                    <div className='bg-gradient-to-br from-purple-50 to-purple-100/50 p-5 rounded-2xl'>
                        <h2 className='text-2xl font-bold text-purple-900 mb-4 flex items-center gap-2'>
                            <FiCheckCircle className="text-purple-600"/> Core Features
                        </h2>
                        <ul className="space-y-3 text-lg font-medium text-gray-700">
                            <li className='flex gap-3 items-start'>
                                <FiCheckCircle className="text-purple-600 mt-1 flex-shrink-0"/> 
                                <span>Browse available tasks and submit competitive bids</span>
                            </li>
                            <li className='flex gap-3 items-start'>
                                <FiCheckCircle className="text-purple-600 mt-1 flex-shrink-0"/> 
                                <span>Full CRUD operations for task management and updates</span>
                            </li>
                            <li className='flex gap-3 items-start'>
                                <FiCheckCircle className="text-purple-600 mt-1 flex-shrink-0"/> 
                                <span>Comprehensive dashboard for tracking bids, tasks, and earnings</span>
                            </li>
                        </ul>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-4">
                        <a href="https://techgigs-79204.web.app/" target="_blank" rel="noopener noreferrer">
                            <button className='group/btn cursor-pointer bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-900 text-white px-6 py-3 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2'>
                                <FiExternalLink className='group-hover/btn:rotate-45 transition-transform duration-300'/> Live Site
                            </button>
                        </a>

                        <a href="https://github.com/nusratmomita/TechGigs_Client" target="_blank" rel="noopener noreferrer">
                            <button className='group/btn cursor-pointer bg-[#2C1250] hover:bg-[#1a0d30] text-white px-6 py-3 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2'>
                                <FiGithub className='group-hover/btn:rotate-12 transition-transform duration-300'/> GitHub Repo
                            </button>
                        </a>
                        <Link to='/TechGigsDetails'>
                            <button className='group/btn cursor-pointer bg-white text-purple-800 border-2 border-purple-600 px-6 py-3 rounded-xl text-base font-semibold shadow-md hover:bg-purple-50 hover:border-purple-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2'>
                                <FiInfo className='group-hover/btn:scale-125 transition-transform duration-300'/> View Details
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