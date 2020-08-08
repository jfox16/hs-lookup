import React from 'react';
import './Header.css';

import headerLogo from '../../img/logos/header-logo.svg';

function Header(props) {
  return (
    <>
    <div className="Header" style={props.style}>
      <a href='/'>
        <img src={headerLogo} alt='HS Lookup' className='HeaderLogo' style={{height: '100%'}} />
      </a>
    </div>
    <div className='HeaderSpacer' />
    </>
  );
}

export default Header;