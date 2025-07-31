import React from 'react';
import { Link } from 'react-router';
import HomeBtn from '../../HomeBtn/HomeBtn';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import techStack from '../../../assets/techStack.png'; 

const CareenFind = () => {
    return (
        <motion.div
            className="card bg-purple-200 shadow-6xl max-w-5xl mx-auto my-10 rounded-3xl border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}>
            <div className="card-body space-y-6 text-[#2C1250]">
                <section>
                    <h2 className="text-4xl font-bold mb-2">🔗 Description</h2>
                    <p className="text-2xl font-medium">
                        Made with MERN stack, CareerFind is a full-stack project that helps you find your preferred job!
                    </p>
                </section>

                <section>
                    <h2 className="text-4xl font-bold mb-4">🎯 Technologies Used</h2>
                    <ul className="grid grid-cols-2 gap-4 text-2xl font-bold">
                        {
                            ["React", "React Router" , "React Toastify", "TailwindCSS" , "Firebase"].map((tech, index) => (
                                <li key={index} className="flex items-center gap-1">
                                    <img src={techStack} alt="techStack" /> 
                                    {tech}
                                </li>
                            ))
                        }
                    </ul>
                </section>

                <section>
                    <h2 className="text-4xl font-bold  mb-2">🦾 Challenges</h2>
                    <p className="text-2xl font-medium">
                        The main challenge I faced was implementing the authentication system effectively.
                    </p>
                </section>

                <section>
                    <h2 className="text-4xl font-bold  mb-2">⚡ Future Improvements</h2>
                    <p className="text-2xl font-medium">
                        I’d like to add features like job search and sorting jobs by the most recent listings.
                    </p>
                </section>

                <div className="text-center pt-6">
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

export default CareenFind;
