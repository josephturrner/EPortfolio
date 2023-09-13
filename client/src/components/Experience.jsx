import React, { useState } from 'react';

function Experience(props) {
  const { where, when, department, description, skills, link, logo, technology } = props.details;
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
          <a href={`${link}`} target='_blank' rel='noreferrer' className='item-link large' onClick={handleAnchorClick}>
            <img className='item-logo large' alt="" src={`${logo}`} />
          </a>
          <section className='item-titlecard'>
            <h2 className='item-title'>{where}</h2>
            <p className='item-where'>{department}</p>
            <p className='item-when'>{when}</p>
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
  )
}

export default Experience;
