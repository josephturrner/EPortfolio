import React, { useState } from 'react';

function CareerPath(props) {

    const information = props.info;
    const colorMap = {
        0: 'primary',
        1: 'secondary',
        2: 'tertiary'
    };
    
    const color = colorMap[props.color];

    const [bodyVisible, setBodyVisible] = useState(false);

    const toggleBodyVisibility = () => {
      setBodyVisible(!bodyVisible);
    };

    return (
        <section className={`career ${color ? color : ''}`}>
            <section className='side-by-side even'>
                {information.logo && (
                    <img src={information.logo} alt='' className='item-logo'/>
                )}
                <h2 className='career-title'>{information.title}</h2>
                {information.git ? (
                    <a className='item-link' href={information.git}>
                        <img src='/icons/git-logo.svg' className='item-logo' alt=''/>
                    </a>
                ) : (
                    information.logo && (
                        <img src={information.logo} alt='' className='item-logo'/>
                    )
                )}
            </section>
            <section className='top-bottom'>
                <section className='box-list'>
                    {information.skills.map((item, index) => (
                        <p className='box-list-item' key={index}>
                            {item}
                        </p>
                    ))}
                </section>
                <p className='card-description'>
                    {information.description}
                </p>
            </section>
        </section>
    )
}

export default CareerPath;