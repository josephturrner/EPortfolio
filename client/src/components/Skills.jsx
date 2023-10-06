import React, { useState, useEffect, forwardRef } from 'react';

function Skill(props) {

    const skillLevel = [
        { max: 24, text: 'Beginner' },
        { max: 49, text: 'Competent' },
        { max: 74, text: 'Proficient' },
        { max: Infinity, text: 'Expert' },
    ];

    const skill = props.skill;

    const [showDescription, setShowDescription] = useState(false);

    const handleDescription = (bool) => {
        setShowDescription(bool)
    }

    return (
        <section className='skill-box' onMouseEnter={() => handleDescription(true)} onMouseLeave={() => handleDescription(false)}>
            <img className='skill-icon' src={skill.icon} alt=''/>
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

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.skills'); // Select the '.about' element
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
    )
});

export default Skills;