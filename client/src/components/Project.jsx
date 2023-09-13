import React, { useState } from 'react';

function Project(props) {
  const { title, description, link, skills, download, git, subtitle, logo, technology } = props.details;
  const bottom = props.bottom;

  const [bodyVisible, setBodyVisible] = useState(false);

  const toggleBodyVisibility = () => {
    setBodyVisible(!bodyVisible);
  };

  const handleAnchorClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`item-card ${bottom ? 'bottom' : ''}`}>
      <section className='item-header' onClick={toggleBodyVisibility}>
        <section className='item-header-info'>
          <section className='logo-container'>
            {link ? (
              <a href={`${link}`} target='_blank' rel='noreferrer' className='item-link' onClick={handleAnchorClick}>
                <img className={`item-logo ${!(git || download) ? 'medium' : ''}`} alt='' src={`${logo}`} />
              </a>
            ) : (
              <img className={`item-logo lone ${!(git || download) ? 'medium' : ''}`} alt='' src={`${logo}`} />
            )}
            {git && (
              <a className='item-link' href={`${git}`} target="_blank" rel="noreferrer">
                <img className='item-logo' src='/icons/git-logo.svg' alt='Git'/>
              </a>
            )}
            {download && (
              <a className='item-link' href={`/project-files/${download}`} download>
                <img className='item-logo' src='/icons/download-icon.svg' alt='Download'/>
              </a>
            )}
          </section>
          <section className='item-titlecard'>
              <h2 className='item-title'>{title}</h2>
              {subtitle && (
                <p className='item-sub'>{subtitle}</p>
              )}
          </section>
        </section>
        <div className='item-header-box'>
          <ol className='box-list'>
            {technology.map((item, index) => (
              <li key={index} className='box-list-item'>{item}</li>
            ))}
          </ol>
        </div>
      </section>
      <div className={`item-drawer ${bodyVisible ? 'visible' : ''}`}>
        <section className='item-body'>
          <section className='item-description'>
            {description}
          </section>
          <section className='bullet-list-box'>
            <h2 className='bullet-list-title'>Concepts Learned</h2>
            <ol className='bullet-list'>
              {skills.map((item, index) => (
                <li key={index} className='bullet-list-item'>{item}</li>
              ))}
            </ol>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Project;
