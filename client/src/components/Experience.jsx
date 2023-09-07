function Experience (props) {

    const { where, when, department, description, skills, link, ps, logo } = props.details;

    const skillsSection = (
        skills && (
            <section className='experience-skills'>
                <h3 className='experience-skills-title'>Relevant Skills Learned</h3>
                <ol className='experience-skill-list'>
                    {skills.map((item, index) => (
                        <li key={index} className='experience-skill'>{item}</li>
                    ))}
                </ol>
            </section>
        )
    );

    const logoSection = (
        <section className='experience-logo-container'>
            <img className='experience-logo' alt="" src={`${logo}`}/>
        </section>
    );

    return (
        <div className='experience-card'>
            <section className='experience-header'>
                <a href={`${link}`} target='_blank' rel='noreferrer' className='experience-title'>{where}</a>
                <p className='experience-where'>{department}</p>
                {ps && (
                    <p className='experience-ps'>{ps}</p>
                )}
                <p className='experience-when'>{when}</p>
            </section>
            <section className='experience-body'>
                {props.even ? (
                    logoSection
                ) : (
                    skillsSection
                )}
                <section className='experience-description'>
                    {/* <h3 className='experience-description-title'>Description</h3> */}
                    <p className='experience-description-text'>{description}</p>
                </section>
                {props.even ? (
                    skillsSection
                ) : (
                    logoSection
                )}
            </section>
        </div>
    )
}

export default Experience;