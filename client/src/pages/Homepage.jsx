import React, {useState, useEffect } from 'react';

import Header from '../components/Header';
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
            const experience = document.querySelector('.experience');
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
            <Header header={homepage.header}/>
            <section className='content'>
                <div className='intro'>
                    <img className='intro-pic' src={homepage.profile.photo} alt='' />
                    <p className={`intro-more ${showIntro ? 'visible': ''}`}>Scroll to Learn More</p>
                    <h2 className='intro-title'>{homepage.header.title}</h2>
                </div>
                <About homepage={homepage}/>
                <Skills skills={homepage.skills}/>
                <section className={`experience ${isInView ? 'in-view': ''}`}>
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