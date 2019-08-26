import React from 'react';
import '../Header/Header.css';

const Logo = ({ src, className }) => {
    return (
        <img className={ className }
            src={ src }
            alt = "BrightLabLogo"
        />
    )
}

export default Logo;