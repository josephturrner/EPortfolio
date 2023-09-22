import React, { useState, useEffect } from 'react';
import Profile from '../components/Profile'
import Card from '../components/Card'
import Experience from '../components/Experience'
import CareerPath from '../components/CareerPath'
import homepage from '../homepage.json'
import socials from '../socials.json'

function HomePage() {

    const [scrollY, setScrollY] = useState(0);
    const targetIntroScroll = 200;
    const [introVisible, setIntroVisible] = useState(false);
    const [scrollEnabled, setScrollEnabled] = useState(false);

    useEffect(() => {

        const handleWheel = async (e) => {
            if (window.scrollY === 0) {
                if (e.deltaY <= 0) {
                    setIntroVisible(false);
                    setScrollEnabled(false);
                } else {
                    setIntroVisible(true);
                    setTimeout(() => {
                        setScrollEnabled(true);
                        console.log('trigger');
                    }, 1000);
                }
            }
        }

        window.addEventListener('wheel', handleWheel, {passive: false});

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [scrollY, targetIntroScroll, scrollEnabled]);

    const Top = `${17 + (scrollY * (30 - 17)) / targetIntroScroll}vh`;
    const Left = `${13 - (scrollY * (13 - 1)) / targetIntroScroll}vw`;

    const introTitleStyles = {
        top: Top,
        left: Left,
    }

    return(
        <div className='home'>
            <section className='intro'>
                <div className='intro-header'>
                    <h2 className='intro-name'>{homepage.profile.name}</h2>
                    <section className='side-by-side end'>
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
                </div>
                <img className='intro-pic' src={homepage.profile.photo} alt=''/>
                {/* <p className='intro-description'>
                    {homepage.profile.description}
                </p>
                <section className='intro-education'>
                    <img className='item-logo' src={homepage.education.logo} alt=''/>
                    <section className='intro-education-description'>
                        <p className='item-title'>{homepage.education.title}</p>
                        <p className='item-title subtitle'>{homepage.education.subtitle}</p>
                        <p className='item-title subtitle'>{homepage.education.ps}</p>
                    </section>
                </section> */}
                <section className={`intro-title ${introVisible ? 'open' : ''}`}>
                    <h2 className='item-title subtitle'>{homepage.profile.title}</h2>
                    <p className={`intro-description ${introVisible ? 'open' : ''}`}>{homepage.profile.description}</p>
                </section>
            </section>
            <section className='side-by-side intro-careers'>
                {homepage.careerpaths.map((item, index) => (
                    <CareerPath info={item} key={index} color={index}/>
                ))}
            </section>
            <Profile homepage={homepage} socials={socials.socials}/>
            <section className='side-by-side even'>
                {homepage.experience.map((item, index) => (
                    <Experience experience={item} key={index}/>
                ))}
            </section>
            <div className='margin'/>
            <section className='side-by-side'>
                {homepage.projects.map((item, index) => (
                    <Card info={item} key={index}/>
                ))}
            </section>
        </div>
    )
}

export default HomePage;