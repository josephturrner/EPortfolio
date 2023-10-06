import React, { useState, useEffect } from 'react';

function Header(props) {

    const text = props.section;
    const [headerPadding, setheaderPadding] = useState('70px');
    const [headerText, setHeaderText] = useState(text);
    const [visible, setVisible] = useState(false);

    useEffect(() => {

        setVisible(false);
        setTimeout(() => {
            setHeaderText(text);
            setVisible(true);
        }, 250);

    }, [props.section]);

    useEffect(() => {
        const handleScroll = () => {

            const scrollY = window.scrollY;
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
            <h2 className={`header-name ${visible ? '' : 'invisible'}`}>{headerText}</h2>
        </div>
    )
}

export default Header;