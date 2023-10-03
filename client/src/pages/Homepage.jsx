import React, {useState, useEffect } from 'react';
import { Element } from 'react-scroll';

import NewHeader from '../components/NewHeader';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Work from '../components/Work';
import Contact from '../components/Contact';

import homepage from '../homepage.json';

function HomePage() {

    const [isInView, setIsInView] = useState(false);
    const [showIntro, setShowIntro] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);


    useEffect(() => {

        const handleScroll = () => {
            const experience = document.querySelector('.experience-section');
            if (experience) {
                const rect = experience.getBoundingClientRect();
                setIsInView(rect.top + rect.height/10 < window.innerHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <div className='home'>
            <NewHeader header={homepage.header}/>
            <section className='content'>
                <div className='centered-content'>
                    <img className='intro-pic' src={homepage.profile.photo} alt='' />
                    <p className={`intro-more ${showIntro ? 'visible': ''}`}>Scroll to Learn More</p>
                    <h2 className='header-title'>{homepage.header.title}</h2>
                </div>
                <About homepage={homepage}/>
                <Skills skills={homepage.skills}/>
                <section className={`experience-section ${isInView ? 'in-view': ''}`}>
                    {homepage.experience.map((item, index) => (
                        <Work experience={item} key={index}/>
                    ))}
                    <Projects projects={homepage.projects}/>
                </section>
                <Contact contact={homepage.contact}/>
            </section>
        </div>
    )
}

export default HomePage;