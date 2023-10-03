import React, { useState, useEffect } from 'react';

function Skills (props) {

    const skills = props.skills;

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

    return (
        <section className='skills'>
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
}

export default Skills;