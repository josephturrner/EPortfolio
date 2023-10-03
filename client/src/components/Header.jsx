import React, { useState, useEffect } from 'react';

function Header(props) {

    const header = props.header;
    const [headerPadding, setheaderPadding] = useState('70px');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            console.log(scrollY);

            const newheaderPadding = 70 - scrollY;

            const updatedheaderPadding = `${Math.max(0, newheaderPadding)}px`;

            setheaderPadding(updatedheaderPadding);
        };
  
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`header`} style={{paddingTop: headerPadding}}>
            <h2 className='header-name'>{header.name}</h2>
        </div>
    )
}

export default Header;