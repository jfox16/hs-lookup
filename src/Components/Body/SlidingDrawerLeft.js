import React, { useState, useEffect } from 'react';
import { MdFilterList } from 'react-icons/md'
import { GrFormClose } from 'react-icons/gr';

import './SlidingDrawerLeft.css';

function SlidingDrawerLeft(props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 1500);
  }, []);

  const handleButtonClick = (event) => {
    setIsOpen(!isOpen);
  }

  const spacerTransitionStyle = {};
  if (!isOpen) spacerTransitionStyle.width = 0;
  const drawerTransitionStyle = {};
  if (isOpen) drawerTransitionStyle.left = 0;

  return (
  <>
    <div
      className='SlidingDrawerLeftSpacer'
      style={spacerTransitionStyle}
    />
    <div
      className='SlidingDrawerLeft'
      style={drawerTransitionStyle}
    >
      <div style={{height: 0}}>
        <div
          className='SlidingDrawerLeftButton' 
          onClick={handleButtonClick}
          style={{
            right: (isOpen) ? '24px' : '-48px'
          }}
        >
          {(isOpen) ? <GrFormClose /> : <MdFilterList />}
        </div>
      </div>
      <div className='SlidingDrawerLeftContents'>
        {props.children}
      </div>
    </div>
  </>
  );
}

export default SlidingDrawerLeft;