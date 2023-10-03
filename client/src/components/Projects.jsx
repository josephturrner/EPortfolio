import React from 'react';

function Project(props) {

    const project = props.project;

    return (
        <section className='project-box' style={{backgroundImage: `url(${project.background.image})`, backgroundPosition: project.background.position}}>
            <h2 className='project-title'>{project.title}</h2>
            {project.subtitle && (
                <p className='project-title subtitle'>{project.subtitle}</p>
            )}
            <section className='wrap-list large project-skills'>
                {project.skills.map((item, index) => (
                    <p className='list-item' key={index}>{item}</p>
                ))}
            </section>
            <p className='project-description'>{project.description}</p>
        </section>
    )
}

function Projects(props) {

    const projects = props.projects;

    return (
        <>
        <section className='project-col left'>
            {projects
                .filter((item, index) => index % 2 === 0)
                .map((item, index) => (
                    <Project key={index} project={item}/>
                ))
            }
        </section>
        <section className='project-col right'>
            {projects
                .filter((item, index) => index % 2 === 1)
                .map((item, index) => (
                    <Project key={index} project={item}/>
                ))
            }
        </section>
        </>
    )

}

export default Projects;