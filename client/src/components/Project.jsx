function Project(props) {
  const { title, description, images, skills, download, git, subtitle, logos } = props.details;

  return (
    <div className='project-card'>
      <section className='project-header'>
        <section className='project-hook'>
          <img className='project-icon' alt='' src={`${logos[0]}`}/>
          <section className='project-titlecard'>
            <h2 className='project-title'>{title}</h2>
            {subtitle && (
              <p className='project-subtitle'>{subtitle}</p>
            )}
          </section>
          <img className='project-icon' alt='' src={`${(logos.length > 1) ? logos[1] : logos[0]}`}/>
        </section>
        {(git || download) && (
          <section className='project-external'>
            {git && (
              <a className='project-link' href={`${git}`} target="_blank" rel="noreferrer">
                <img className='project-button-image' src='/icons/git-logo.svg' alt='Git'/>
              </a>
            )}
            {download && (
              <a className='project-link' href={`/project-files/${download}`} download>
                <img className='project-button-image' src='/icons/download-icon.svg' alt='Download'/>
              </a>
            )}
          </section>
        )}
      </section>
      {skills.length > 0 && (
        <ol className='project-skills'>
          {skills.map((item, index) => (
            <li className='project-skill' key={index}>{item}</li>
          ))}
        </ol>
      )}
      <p className='project-description'>
        {description}
      </p>
      {images.length > 0 && (
        <ol className='project-images'>
          {images.map((item, index) => (
            <img src={`${item}`} className='project-image' alt='' key={index} />
          ))}
        </ol>
      )}
    </div>
  );
}

export default Project;
