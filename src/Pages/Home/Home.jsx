import React from 'react';
import Banner from '../../Components/Banner/Banner';
import AboutMe from '../../Components/AboutMe/AboutMe';
import Skills from '../../Components/Skills/Skills';
import Education from '../../Components/Education/Education';
import Projects from '../../Components/Projects/Projects';
import ContactMe from '../../Components/ContactMe/ContactMe';
// import Sidebar from '../../Components/Sidebar/Sidebar';

const Home = () => {
    return (
        <div className='bg-[#251C31] overflow-hidden pb-10'>
            <Banner />
            <AboutMe />
            <Skills />
            <Education />
            <Projects />
            <ContactMe />
        </div>
    );
};

export default Home;