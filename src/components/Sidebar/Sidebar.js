import React from 'react';

import { DESKTOP_HEADER_HEIGHT, SIDEBAR_WIDTH } from 'globalConstants';

import './Sidebar.css';

const Sidebar = ({ children }) => {
  return (
    <div className='Sidebar' style={{ paddingTop: DESKTOP_HEADER_HEIGHT, width: SIDEBAR_WIDTH }}>
      {children}
    </div>
  );
}

export default Sidebar;