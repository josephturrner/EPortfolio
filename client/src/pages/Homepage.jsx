import React, {useState, useEffect, useRef } from 'react';

import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Work from '../components/Work';
import Contact from '../components/Contact';

import '../styles/homepage.css';

import homepage from '../homepage.json';

function HomePage() {

    const headers = {
        'intro': 'Joseph Turner',
        'about': 'About',
        'skills': 'Skills',
        'experience': 'Experience',
        'contact': 'Contact'
    }

    const [isInView, setIsInView] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [showIntro, setShowIntro] = useState(false);
    const [headerText, setHeaderText] = useState('intro');

    const introRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const experienceRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {

        const handleScroll = () => {
            handleElementScroll(introRef, 'intro');
            handleElementScroll(aboutRef, 'about');
            handleElementScroll(skillsRef, 'skills');
            handleElementScroll(experienceRef, 'experience');
            handleElementScroll(contactRef, 'contact');
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);
    
    const handleElementScroll = (elementRef, elementClassName) => {
        const element = elementRef.current;
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight / 3 && rect.bottom > window.innerHeight / 2) {
                setHeaderText(elementClassName);
                console.log(`${elementClassName} in view`);
            }
        }
    };

    useEffect(() => {
        setShowMore(true);
        setShowIntro(true);
    }, []);


    useEffect(() => {

        const handleScroll = () => {

            const experience = document.querySelector('.experience');
            if (experience) {
                const rect = experience.getBoundingClientRect();
                setIsInView(rect.top + 200 < window.innerHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const setWidth = () => {
          const clientWidth = document.documentElement.clientWidth;
          document.querySelector('.home').style.width = `${clientWidth}px`;
        };
      
        setWidth();
        window.addEventListener('resize', setWidth);
      
        return () => window.removeEventListener('resize', setWidth);
    }, []);

    return(
        <div className='home'>
            <Header header={homepage.header} section={headers[headerText]}/>
            <section className='content'>
                <div className={`intro ${showIntro ? 'visible' : ''}`} ref={introRef}>
                    <img className='intro-pic' src={homepage.intro.photo} alt='' />
                    <p className={`intro-more ${showMore ? 'visible': ''}`}>Scroll to Learn More</p>
                    <h2 className='intro-title'>{homepage.header.title}</h2>
                </div>
                <About homepage={homepage} ref={aboutRef}/>
                <Skills skills={homepage.skills} ref={skillsRef}/>
                <section className={`experience ${isInView ? 'in-view': ''}`} ref={experienceRef}>
                    {homepage.experience.map((item, index) => (
                        <Work experience={item} key={index}/>
                    ))}
                    <Projects projects={homepage.projects}/>
                </section>
                <Contact contact={homepage.contact} ref={contactRef}/>
            </section>
        </div>
    )
}

export default HomePage;