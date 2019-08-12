import React from 'react';
import { Logo } from '../Logo';

import './Header.css'

import b3d from '../Logo/img/b3d.svg'
import logo from '../Logo/img/logo.svg'

export function Header() {
    return (
        <header className="header">
            <container className="flexContainer"> 
            <span className="headerTitle">Brightlab <br/> blog </span>
            </container>
              <div className="logoWrapper">
                <Logo classname="Logo b3d" src={ b3d } />
                <Logo classname="Logo min" src={ logo } />
              </div>
            <a className="headerLink" href="https://brightlab.me/">Oficial website <sup>&#129109;</sup> </a>
        </header>
    )
}
