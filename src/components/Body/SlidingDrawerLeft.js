import React, { useState } from 'react';
import { MdFilterList } from 'react-icons/md'
import { GrFormClose } from 'react-icons/gr';
import Footer from '../App/Footer';

import './SlidingDrawerLeft.css';

function SlidingDrawerLeft(props) {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className='SlidingDrawerCloseButton' onClick={e => setIsOpen(false)} >BACK TO CARDS</div>
        <Footer />
      </div>
    </div>
  </>
  );
}

export default SlidingDrawerLeft;