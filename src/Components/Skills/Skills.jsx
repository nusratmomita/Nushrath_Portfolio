import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaFire, FaJava, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { SiC, SiCplusplus, SiExpress, SiMongodb } from 'react-icons/si';

const Skills = () => {
    return (
        <div data-aos="fade-down-left" className='max-w-7xl mx-auto text-[#2C1250] space-y-5 mb-20'>
            <h1 className='text-6xl font-extrabold text-[#D9D9D9] text-left'>Skills</h1>
            <h1 data-aos="fade-down" data-aos-duration="3000" 
                className='text-5xl font-extrabold text-[#D9D9D9] text-center'>
            Technologies I've learned and worked on
            </h1>
            <div className="mt-10">
                <Marquee pauseOnHover gradient={false} speed={50}>
                    <div className="flex items-center gap-12 text-4xl">
                        <div className="bg-[#CCD6F6] rounded-3xl p-2 w-[120px] ml-20 flex flex-col items-center">
                            <FaReact className="text-blue-400" />
                            <span className="text-[#4F228D] text-3xl font-bold mt-2">React</span>
                        </div>
                        <div className="bg-[#CCD6F6] rounded-3xl p-2 w-[120px] flex flex-col items-center">
                            <FaNodeJs className="text-green-600" />
                            <span className="text-[#4F228D] text-3xl font-bold mt-2">Node.js</span>
                        </div>
                        <div className="bg-[#CCD6F6] rounded-3xl p-2  flex flex-col items-center">
                            <SiExpress className="text-white" />
                            <span className="text-[#4F228D] text-3xl font-bold mt-2">Express.js</span>
                        </div>
                        <div className="bg-[#CCD6F6] rounded-3xl p-2  flex flex-col items-center">
                            <SiMongodb className="text-green-500" />
                            <span className="text-[#4F228D] text-3xl font-bold mt-2">MongoDB</span>
                        </div>
                        <div className="bg-[#CCD6F6] rounded-3xl p-2 w-[120px] flex flex-col items-center">
                            <FaPython className="text-yellow-500" />
                            <span className="text-[#4F228D] text-3xl font-bold mt-2">Python</span>
                        </div>
                        {/* <div className="bg-[#CCD6F6] rounded-3xl p-2 w-[120px] flex flex-col items-center">
                            <FaJavaScript className="text-yellow-500" />
                            <span className="text-[#4F228D] text-3xl font-bold mt-2">Python</span>
                        </div> */}
                    </div>
                </Marquee>
                <div className="mt-20">
                    <Marquee pauseOnHover gradient={false} speed={50} direction='right'>
                        <div className="flex items-center gap-12 text-4xl">
                            <div className="bg-[#CCD6F6] rounded-3xl p-2 w-[120px] flex flex-col items-center">
                                <FaJava className="text-red-600" />
                                <span className="text-[#4F228D] text-3xl font-bold mt-2">Java</span>
                            </div>
                            <div className="bg-[#CCD6F6] rounded-3xl p-2 w-[120px] flex flex-col items-center">
                                <SiC className="text-blue-600" />
                                <span className="text-[#4F228D] text-3xl font-bold mt-2">C</span>
                            </div>
                            <div className="bg-[#CCD6F6] rounded-3xl p-2 w-[120px] flex flex-col items-center">
                                <SiCplusplus className="text-purple-600" />
                                <span className="text-[#4F228D] text-3xl font-bold mt-2">C++</span>
                            </div>
                            <div className="bg-[#CCD6F6] rounded-3xl p-2 flex flex-col items-center">
                                <FaFire className="text-orange-500 " />
                                <span className="text-[#4F228D] text-3xl font-bold mt-2">Firebase</span>
                            </div>
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Skills;