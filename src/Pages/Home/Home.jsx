import React from 'react';
import Header from '../../Components/Header/Header'
import Banner from '../../Components/Banner/Banner';
import AboutMe from '../../Components/AboutMe/AboutMe';
import Skills from '../../Components/Skills/Skills';
import Education from '../../Components/Education/Education';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
        </div>
    );
};

export default Home;