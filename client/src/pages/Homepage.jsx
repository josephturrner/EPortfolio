import React, { useState, useEffect } from 'react';
import NewHeader from '../components/NewHeader';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Work from '../components/Work';
import Contact from '../components/Contact';
import homepage from '../homepage.json';

function HomePage() {

    return(
        <div className='home'>
            <NewHeader/>
            <section className='content'>
                <div className='centered-content'>
                    <img className='intro-pic' src={homepage.profile.photo} alt='' />
                    <p className='intro-more'>Scroll to Learn More</p>
                    <h2 className='header-title'>{homepage.header.title}</h2>
                </div>
                <About/>
                <Skills skills={homepage.skills}/>
                <section className='experience-section'>
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