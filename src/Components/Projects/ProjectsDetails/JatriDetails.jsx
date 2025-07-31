import React from 'react';
import { Link } from 'react-router';
import HomeBtn from '../../HomeBtn/HomeBtn';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import techStack from '../../../assets/techStack.png'; 


const JatriDetails = () => {
    return (
       <motion.div
            className="card bg-purple-200 shadow-2xl max-w-5xl mx-auto my-10 rounded-3xl border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}>
            <div className="card-body space-y-6 text-[#2C1250]">
                <section>
                    <h2 className="text-4xl font-bold mb-2">🔗 Description</h2>
                    <p className="text-3xl font-medium">
                        Jatri is a MERN full-stack project that helps users rent and manage cars easily and without a worry!
                    </p>
                </section>

                <section>
                    <h2 className="text-4xl font-bold mb-4">🎯 Technologies Used</h2>
                    <ul className="grid grid-cols-2 gap-4 text-2xl font-bold">
                        {
                            ["React","React Router" ,"TailwindCSS","ExpressJS", "MongoDB", "Firebase" ].map((tech, index) => (
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
                    <p className="text-3xl font-medium">
                        The main challenge I faced was how to implement Searching and Sorting. Handling of API to execute them was the toughest thing.
                    </p>
                </section>

                <section>
                    <h2 className="text-4xl font-bold  mb-2">⚡ Future Improvements</h2>
                    <p className="text-3xl font-medium">
                        I’d like to add features like Dashboard to manage renting car more effectively with comparison, a chart to compare prices, integrate Maps to get nearest location car deal offers and so on.
                    </p>
                </section>

                <div className="-mt-10 text-center pt-6">
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

export default JatriDetails;