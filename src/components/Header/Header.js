import React from 'react';
import './Header.css';

import headerLogo from 'img/logos/header-logo.svg';

import { DESKTOP_HEADER_HEIGHT } from 'globalConstants';

function Header() {
  return (
    <div className="Header" style={{ height: DESKTOP_HEADER_HEIGHT }}>
      <a href='/'>
        <img src={headerLogo} alt='HS Lookup' className='HeaderLogo' style={{height: '100%'}} />
      </a>
    </div>
  );
}

export default Header;