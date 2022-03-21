import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';

function Home () {
    /*
    Cards 入面有bug
    */
    return (
        <>
            <HeroSection />
            <Cards />
        </>
    );
}

export default Home;