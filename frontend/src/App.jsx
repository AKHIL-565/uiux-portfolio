import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import DesignProcess from './components/DesignProcess/DesignProcess';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Contact from './components/Contact/Contact';
import OpenToWork from './components/OpenToWork/OpenToWork';
import Footer from './components/Footer/Footer';
import Background from './components/Layout/Background';
import Marquee from './components/Marquee/Marquee';
import { fetchProfile } from './services/api';
import useScrollReveal from './hooks/useScrollReveal';
import './index.css';

function App() {
    const [profile, setProfile] = useState(null);

    // Initialize Scroll Reveal Observer
    useScrollReveal();

    useEffect(() => {
        const getProfileData = async () => {
            const data = await fetchProfile();
            setProfile(data);
        };
        getProfileData();
    }, []);

    return (
        <>
            <Background />
            <Header profileName={profile?.name} />
            <Hero profile={profile} />
            <Marquee />
            <About />
            <DesignProcess />
            <WorkExperience />
            <Contact />
            <OpenToWork />
            <Footer />
        </>
    );
}

export default App;
