import React from 'react';

function Work(props) {

    const experience = props.experience;

    return (
        <section className='work'>
            <section className='work-row'>
                <a className='work-profile' href={`${experience.link}`} target='_blank' rel='noreferrer' style={{backgroundImage: `url(${experience.background})`}}>
                    <section className='work-body'>
                        <h2 className='work-title'>{experience.title}</h2>
                        <p className='work-title subtitle'>{experience.subtitle}</p>
                        <p className='work-dates'>{experience.start} - {experience.end}</p>
                    </section>
                </a>
                <p className='work-description'>{experience.description}</p>
                <div className='work-skills'>
                    <section className='wrap-list'>
                        {experience.skills.map((item, index) => (
                            <p className='list-item' key={index}>{item}</p>
                        ))}
                    </section>
                </div>
            </section>
        </section>
    )
}

export default Work;