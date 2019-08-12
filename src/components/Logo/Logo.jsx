import React from 'react';
import '../Header/Header.css';

const Logo = ({ src, classname }) => {
    return (
        <img className={ classname }
            src={ src }
                alt = "BrightLabLogo"
        />
    )
}

export default Logo;