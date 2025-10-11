import React from 'react';
import { Link } from 'react-router';
import HomeBtn from '../../HomeBtn/HomeBtn';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import techStack from '../../../assets/techStack.png'; 

const AroggoInfo = () => {
    return (
        <motion.div
            className="m-10 card bg-[#DED3C4] shadow-2xl lg:max-w-5xl lg:mx-auto my-10 rounded-3xl border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}>
            <div className="card-body space-y-6 text-[#080c3b]">
                
                {/* Description */}
                <section>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-2">🔗 Description</h2>
                    <p className="text-xl lg:text-2xl font-medium">
                        <span className="font-bold">Aroggo</span> is a medicine e-commerce platform that helps users to 
                        browse, buy, and pay for medicines easily with a smooth online experience.
                    </p>
                </section>

                {/* Tech Stack */}
                <section>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">🎯 Technologies Used</h2>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xl lg:text-2xl font-medium">
                        {[
                            "React", 
                            "React Router", 
                            "TanStack Query", 
                            "TailwindCSS + DaisyUI", 
                            "Firebase Auth", 
                            "Express.js", 
                            "MongoDB"
                        ].map((tech, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <img src={techStack} alt="techStack" className="w-6 h-6"/> 
                                {tech}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Challenges */}
                <section>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-2">🦾 Challenges</h2>
                    <p className="text-xl lg:text-2xl font-medium">
                        The biggest challenge was implementing secure role-based access (User, Seller, Admin) 
                        and handling JWT authentication properly with Firebase tokens.
                    </p>
                </section>

                {/* Future Improvements */}
                <section>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-2">⚡ Future Improvements</h2>
                    <p className="text-xl lg:text-2xl font-medium">
                        Planned features include AI-based medicine recommendations, 
                        improved order tracking, and real-time notifications for sellers and buyers.
                    </p>
                </section>

                {/* Home button */}
                <div className="text-center pt-6 block lg:w-[17%] mx-auto">
                    <Link to='/'>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <HomeBtn />
                        </motion.div>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default AroggoInfo;
