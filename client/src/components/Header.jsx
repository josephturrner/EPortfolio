import React, { useState, useEffect } from 'react';
import '../styles/header.css';

function Header(props) {

    const text = props.section;
    const [headerPadding, setheaderPadding] = useState('10vh');
    const [headerText, setHeaderText] = useState(text);
    const [visible, setVisible] = useState(false);

    useEffect(() => {

        setVisible(false);
        setTimeout(() => {
            setHeaderText(text);
            setVisible(true);
        }, 250);

    }, [text]);

    useEffect(() => {
        const handleScroll = () => {

            const scrollY = window.scrollY;
            const newheaderPadding = 10 - scrollY;
            const updatedheaderPadding = `${Math.max(0, newheaderPadding)}vh`;
            setheaderPadding(updatedheaderPadding);
        };
  
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const setHeaderWidth = () => {
          const clientWidth = document.documentElement.clientWidth;
          document.querySelector('.header').style.width = `${clientWidth}px`;
        };
      
        setHeaderWidth(); // Set width initially
        window.addEventListener('resize', setHeaderWidth);
      
        return () => window.removeEventListener('resize', setHeaderWidth);
    }, []);
      

    return (
        <div className={`header`} style={{paddingTop: headerPadding}}>
            <h2 className={`header-name ${visible ? '' : 'invisible'}`}>{headerText}</h2>
        </div>
    )
}

export default Header;