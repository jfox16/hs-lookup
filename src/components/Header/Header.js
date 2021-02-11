import React from 'react';
import { connect } from 'react-redux';

import FilterFormToggleButton from 'components/FilterFormToggleButton';

import headerLogo from 'img/logos/header-logo.svg';

import { DESKTOP_HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from 'globalConstants';

import './Header.css';



const Header = ({ isMobile }) => {
  return (
    <div className="Header" style={{ height: (isMobile) ? MOBILE_HEADER_HEIGHT : DESKTOP_HEADER_HEIGHT }}>
      <img src={headerLogo} alt='HS Lookup' className='HeaderLogo' style={{height: '100%'}} />
      {isMobile && <FilterFormToggleButton />}
    </div>
  );
}



const mapStateToProps = (state => {
  return {
    isMobile: state.renderData.isMobile
  }
})

export default connect(
  mapStateToProps
)(Header);