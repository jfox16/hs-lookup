import React from 'react';

import FilterForm from 'components/FilterForm';

import { DESKTOP_HEADER_HEIGHT, SIDEBAR_WIDTH } from 'globalConstants';

import './Sidebar.css';
import 'simplebar/dist/simplebar.min.css';



const Sidebar = ({ children }) => {
  return (
    <div className='Sidebar' style={{ marginTop: DESKTOP_HEADER_HEIGHT, width: SIDEBAR_WIDTH }}>
      <FilterForm />
    </div>
  );
}



export default Sidebar;