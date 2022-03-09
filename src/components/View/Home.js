import React from 'react';
import MainPage from '../MainPage/MainPage';
import About from '../About/About';
import Services from '../Services/Services';
import OurWork from '../OurWork/OurWork';
import Certificates from '../Certificates/Certificates';
import Contact from '../Contact/Contact';
import WhyUs from '../WhyUs/WhyUs';

function Home() {
    return (
        <>
            <MainPage />
            <About />
            <WhyUs />
            <Services />
            <OurWork />
            <Certificates />
            <Contact />
        </>
    )
}

export default Home