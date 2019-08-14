import React from 'react';
import { Logo } from '../Logo';

import './Header.css'

import b3d from '../Logo/img/b3d.svg'
import logo from '../Logo/img/logo.svg'

export function Header() {
    return (
        <header className="header">
            <div className="flexContainer">
            <span className="headerTitle">Brightlab <br/> blog </span>
                <Logo classname="b3d" src={ b3d } />
                <Logo classname="min" src={ logo } />
            <a className="headerLink" href="https://brightlab.me/">Oficial website <sup>&#129109;</sup> </a>
            </div>
        </header>
    )
}
