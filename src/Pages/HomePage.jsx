import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Gasless from '../components/Gasless.jsx';
import Socialrecovery from '../components/Socialrecovery.jsx';
import Security from '../components/Security.jsx';
import Jointheadvance from '../components/Jointheadvance.jsx';
const HomePage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Gasless />
            <Socialrecovery />
            <Security />
            <Jointheadvance />
            <Footer />
        </div>
    );
};

export default HomePage;