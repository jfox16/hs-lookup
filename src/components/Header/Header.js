import React from 'react'
import { connect } from 'react-redux'
import { GoSettings } from 'react-icons/go'

import IconButton from 'components/IconButton'

import { setFilterFormOpen } from 'store/actions'

import { DESKTOP_HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from 'globalConstants'

import headerLogo from 'img/logos/header-logo.svg'

import './Header.css'

const Header = ({ isMobile, setFilterFormOpen }) => {
  return (
    <div
      className="Header"
      style={{
        height: isMobile ? MOBILE_HEADER_HEIGHT : DESKTOP_HEADER_HEIGHT
      }}
    >
      <img src={headerLogo} alt="HS Lookup" className="HeaderLogo" />
      {isMobile && (
        <IconButton onClick={() => setFilterFormOpen(true)}>
          <GoSettings />
        </IconButton>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isMobile: state.renderData.isMobile
  }
}

export default connect(mapStateToProps, { setFilterFormOpen })(Header)
