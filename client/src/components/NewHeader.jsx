import React, { useState, useEffect, useRef } from 'react';
import homepage from '../homepage.json'
import socials from '../socials.json'

function NewHeader() {
    const [headerPadding, setheaderPadding] = useState('70px');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            console.log(scrollY);

            // Calculate the padding-top value based on scroll position
            const newheaderPadding = 70 - scrollY;

            // Limit the padding-top value to a minimum of 0
            const updatedheaderPadding = `${Math.max(0, newheaderPadding)}px`;

            // Update the state with the new padding-top value
            setheaderPadding(updatedheaderPadding);
        };
  
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`header`} style={{paddingTop: headerPadding}}>
            <h2 className='header-name'>{homepage.header.name}</h2>
        </div>
    )
}

export default NewHeader;