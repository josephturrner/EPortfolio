import React, { useState } from 'react';

function Experience(props) {

    const experience = props.experience;

    const [bodyVisible, setBodyVisible] = useState(false);

    const toggleBodyVisibility = () => {
        setBodyVisible(!bodyVisible);
    };

    return (
        <section className='experience'>
            <img src={experience.logo} className='item-logo xlarge' alt='' onClick={toggleBodyVisibility}/>
            {experience.title && (
                <p className='item-title upper'>{experience.title}</p>
            )}
            {experience.subtitle && (
                <p className='item-title subtitle'>{experience.subtitle}</p>
            )}
            {experience.ps && (
                <p className='item-title subtitle'>{experience.ps}</p>
            )}
            <ol className='bullet-list double'>
                {experience.skills.map((item, index) => (
                    <li className='bullet-list-item' key={index}>{item}</li>
                ))}
            </ol>
        </section>
    )
}


export default Experience;
