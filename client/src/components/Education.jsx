import React, { useState } from 'react';

function Education(props) {
  const { where, degree, ps, when, description, courses, skills, link, logo } = props.details;
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
            <a href={`${link}`} target='_blank' rel='noreferrer' className='item-link' onClick={handleAnchorClick}>
              <img className='item-logo large' alt='' src={`${logo}`} />
            </a>
          </section>
          <section className='item-titlecard'>
              <h2 className='item-title'>{where}</h2>
              <p className='item-sub'>{degree}</p>
              <p className='item-sub'>{ps}</p>
              <p className='item-when'>{when}</p>
          </section>
        </section>
        <div className='item-header-box'>
          <ol className='box-list'>
            {skills.map((item, index) => (
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
            <h2 className='list-title'>Relevant Courses</h2>
            <ol className='bullet-list double'>
              {courses.map((item, index) => (
                <li key={index} className='bullet-list-item'>{item}</li>
              ))}
            </ol>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Education;
