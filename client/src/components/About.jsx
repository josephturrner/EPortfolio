import React, { useState, useEffect } from 'react';
import homepage from '../homepage.json';
import socials from '../socials.json';

function About() {
    return (
        <section className='about'>
            <section className='about-box summary'>
                <section className='top-bottom'>
                    <h2 className='about-name'>{homepage.profile.name}</h2>
                    <p className='about-description'>{homepage.profile.description}</p>
                </section>
                <section className='education'>
                    <img className='education-photo' alt='' src={homepage.education.logo}/>
                    <section className='education-info'>
                        <section>
                            <p className='education-title'>{homepage.education.title}</p>
                            <p className='education-title subtitle'>{homepage.education.subtitle}</p>
                            <p className='education-title subtitle'>{homepage.education.ps}</p>
                        </section>
                        <ol className='education-skills'>
                            {homepage.education.skills.map((item, index) => (
                                <li className='education-skill' key={index}>{item}</li>
                            ))}
                        </ol>
                    </section>
                </section>
            </section>
            <section className='about-box profile'>
                <img className='about-photo' alt='' src='/images/skateboard-mountains.jpg'/>
                <section className='side-by-side even'>
                    <a href={`mailto: ${socials.gmail}`} className='header-link'>
                        <img src='/icons/gmail-logo.svg' alt='' className='contact-logo'/>
                    </a>
                    <a href={`${socials.linkedin}`} className='header-link'>
                        <img src='/icons/linkedin-logo.svg' alt='' className='contact-logo'/>
                    </a>
                    <a href={`${socials.git}`} className='header-link'>
                        <img src='/icons/git-logo.svg' alt='' className='contact-logo'/>
                    </a>
                </section>
            </section>
        </section>
    )
}

export default About;