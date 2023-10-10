import React, { useState, useEffect, forwardRef } from 'react';

import '../styles/skills.css'

function Skill(props) {

    const skillLevel = [
        { max: 24, text: 'Beginner' },
        { max: 49, text: 'Competent' },
        { max: 74, text: 'Proficient' },
        { max: Infinity, text: 'Expert' },
    ];

    const skill = props.skill;

    const [showDescription, setShowDescription] = useState(false);
    const [hover, setHover] = useState(false);

    const handleDescription = () => {
        setShowDescription(!showDescription)
    }

    const handleHover = (bool) => {
        setHover(bool);
    }

    return (
        <section className='skill-box' onClick={handleDescription} onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
            <img className={`skill-icon ${hover ? 'hover' : ''}`} src={skill.icon} alt=''/>
            <h3 className='skill-name'>{skill.name}</h3>
            <section className='skill-progress'>
                <progress className='skill-progressbar' value={skill.level} max="100"/>
                <p className='skill-progress-level'>{skillLevel.find(range => skill.level <= range.max).text}</p>
            </section>
            <p className='skill-description'>{`${skill.years} Year${skill.years === '1' ? '': 's'} Experience`}</p>
            <p className={`skill-description drawer ${showDescription ? 'visible' : ''}`}>{skill.description}</p>
        </section>
    )
}

const Skills = forwardRef((props, ref) => {

    const skills = props.skills;

    const [isInView, setIsInView] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.skills');
            if (element) {
                const rect = element.getBoundingClientRect();
                setIsInView(rect.top + rect.height/10 < window.innerHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        function handleResize() {
          setWindowWidth(window.innerWidth);
          setWindowHeight(window.innerHeight);
        }
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (windowWidth >= 1400) {
        return (
            <section className={`skills ${isInView ? "in-view" : ""}`} ref={ref}>
                <section className='skills-col'>
                    {skills
                        .filter((item, index) => index % 3 === 0)
                        .map((item, index) => (
                            <Skill skill={item} key={index} />
                        ))}
                </section>
                <section className='skills-col'>
                    {skills
                        .filter((item, index) => index % 3 === 1)
                        .map((item, index) => (
                            <Skill skill={item} key={index} />
                        ))}
                </section>
                <section className='skills-col'>
                    {skills
                        .filter((item, index) => index % 3 === 2)
                        .map((item, index) => (
                            <Skill skill={item} key={index} />
                        ))}
                </section>
            </section>
        );
    }
    else if (windowWidth >= 750) {
        return (
            <section className={`skills ${isInView ? "in-view" : ""}`} ref={ref}>
                <section className='skills-col'>
                    {skills
                        .filter((item, index) => index % 2 === 0)
                        .map((item, index) => (
                            <Skill skill={item} key={index} />
                        ))}
                </section>
                <section className='skills-col'>
                    {skills
                        .filter((item, index) => index % 2 === 1)
                        .map((item, index) => (
                            <Skill skill={item} key={index} />
                        ))}
                </section>
            </section>
        )
    }
    else {
        return (
            <section className={`skills ${isInView ? "in-view" : ""}`} ref={ref}>
                <section className='skills-col'>
                    {skills
                        .filter((item, index) => index % 2 === 0)
                        .map((item, index) => (
                            <Skill skill={item} key={index} />
                        ))}
                </section>
            </section>
        )
    }
});

export default Skills;