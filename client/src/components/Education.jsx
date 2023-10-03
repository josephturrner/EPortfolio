import React from 'react';

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

export default Education;