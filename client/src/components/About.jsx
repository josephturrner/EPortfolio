import React, { useState, useEffect } from 'react';

import Education from './Education';

function About(props) {

    const homepage = props.homepage;
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.about'); // Select the '.about' element
            if (element) {
                const rect = element.getBoundingClientRect();
                setIsInView(rect.top + rect.height/4 < window.innerHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className={`about ${isInView ? "in-view" : ""}`}>
            <section className={`about-box summary ${isInView ? "in-view" : ""}`}>
                <section className='top-bottom'>
                    <h2 className='about-name'>{homepage.profile.name}</h2>
                    <p className='about-description'>{homepage.profile.description}</p>
                </section>
                <Education education={homepage.education}/>
            </section>
            <section className={`about-box profile ${isInView ? "in-view" : ""}`}>
                <img className='about-photo' alt='' src='/images/skateboard-mountains.jpg'/>
                <section className='row'>
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
        </section>
    )
}

export default About;