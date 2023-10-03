import React, { useState, useEffect } from 'react';

function Project(props) {

    const project = props.project;

    return (
        <section className='project-box' style={{backgroundImage: `url(${project.background.image})`, backgroundPosition: project.background.position}}>
            <section className='project-cover'>
                <h2 className='project-title'>{project.title}</h2>
                {project.subtitle && (
                    <p className='project-title subtitle'>{project.subtitle}</p>
                )}
                <section className='wrap-list large'>
                    {project.skills.map((item, index) => (
                        <p className='list-item' key={index}>{item}</p>
                    ))}
                </section>
                <p className='project-description'>{project.description}</p>
            </section>
        </section>
    )
}

export default Project;