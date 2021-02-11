import React from 'react';
import SimpleBar from 'simplebar-react';

import { DESKTOP_HEADER_HEIGHT, SIDEBAR_WIDTH } from 'globalConstants';

import './Sidebar.css';
import 'simplebar/dist/simplebar.min.css';

const Sidebar = ({ children }) => {
  return (
    <div className='Sidebar' style={{ marginTop: DESKTOP_HEADER_HEIGHT, width: SIDEBAR_WIDTH }}>
      <SimpleBar className='SimpleBar' autoHide={true}>
        {children}
      </SimpleBar>
    </div>
  );
}

export default Sidebar;