import React, { useState, useEffect } from 'react';

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
            <section className={`about-box profile ${isInView ? "in-view" : ""}`}>
                <img className='about-photo' alt='' src='/images/skateboard-mountains.jpg'/>
                <section className='side-by-side even'>
                    <a href={`mailto: ${homepage.contact.gmail}`} className='header-link'>
                        <img src='/icons/gmail-logo.svg' alt='' className='contact-logo'/>
                    </a>
                    <a href={`${homepage.contact.linkedin}`} className='header-link'>
                        <img src='/icons/linkedin-logo.svg' alt='' className='contact-logo'/>
                    </a>
                    <a href={`${homepage.contact.git}`} className='header-link'>
                        <img src='/icons/git-logo.svg' alt='' className='contact-logo'/>
                    </a>
                </section>
            </section>
        </section>
    )
}

export default About;