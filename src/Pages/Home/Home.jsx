import React from 'react';
import Header from '../../Components/Header/Header'
import Banner from '../../Components/Banner/Banner';
import AboutMe from '../../Components/AboutMe/AboutMe';
import Skills from '../../Components/Skills/Skills';
import Education from '../../Components/Education/Education';
import Projects from '../../Components/Projects/Projects';
import ContactMe from '../../Components/ContactMe/ContactMe';

const Home = () => {
    return (
        <div className='bg-[#251C31] overflow-hidden  pt-[100px] pb-[100px]'>
            <Header></Header>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;