import React, { useState, useEffect, forwardRef } from 'react';

import '../styles/about.css';

function Education(props) {
    
    const education = props.education;

    return (
        <section className='education'>
            <img className='education-photo' alt='' src={education.logo}/>
            <section className='education-info'>
                <section>
                    <p className='education-title'>{education.title}</p>
                    <p className='education-title subtitle'>{education.subtitle}</p>
                    <p className='education-title subtitle'>{education.ps}</p>
                </section>
                <ol className='education-skills'>
                    {education.skills.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            </section>
        </section>
    )
}

const About = forwardRef((props, ref) => {

    const homepage = props.homepage;
    const [isInView, setIsInView] = useState(false);
      
    useEffect(() => {
        
        const handleScroll = () => {
            const element = document.querySelector('.about');
            if (element) {
                const rect = element.getBoundingClientRect();
                setIsInView(rect.top + 200 < window.innerHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
      
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className={`about ${isInView ? "in-view" : ""}`} ref={ref}>
            <section className={`about-box profile ${isInView ? "in-view" : ""}`}>
                <img className='about-photo' alt='' src='/images/skateboard-mountains.jpg'/>
                <section className='about-contacts'>
                    <a href={`mailto: ${homepage.contact.gmail}`} className='link-item'>
                        <img src='/icons/gmail-logo.svg' alt='' className='contact-logo'/>
                    </a>
                    <a href={`${homepage.contact.linkedin}`} className='link-item'>
                        <img src='/icons/linkedin-logo.svg' alt='' className='contact-logo'/>
                    </a>
                    <a href={`${homepage.contact.git}`} className='link-item'>
                        <img src='/icons/git-logo.svg' alt='' className='contact-logo'/>
                    </a>
                </section>
            </section>
            <section className={`about-box summary ${isInView ? "in-view" : ""}`}>
                <section className='top-bottom'>
                    <h2 className='about-name'>{homepage.intro.name}</h2>
                    <p className='about-description'>{homepage.intro.description}</p>
                </section>
                <Education education={homepage.education}/>
            </section>
        </section>
    )
});

export default About;