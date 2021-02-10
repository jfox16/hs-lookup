import React from 'react';
import { MdFilterList } from 'react-icons/md'
import { GrFormClose } from 'react-icons/gr';
import Footer from 'components/Footer';

import './SlidingDrawerLeft.css';

function SlidingDrawerLeft(props) {

  const handleButtonClick = (event) => {
    props.setOpen(!props.open);
  }

  const close = () => {
    props.setOpen(false);
  }

  const drawerTransitionStyle = {};
  if (props.open) drawerTransitionStyle.left = 0;

  return (
  <>
    <div
      className='SlidingDrawerLeft'
      style={{...drawerTransitionStyle, ...props.style}}
    >
      <div>
        <div
          className='SlidingDrawerLeftButton' 
          onClick={handleButtonClick}
          style={{
            top: props.style.paddingTop + 12,
            right: (props.open) ? '24px' : '-48px'
          }}
        >
          {(props.open) ? <GrFormClose /> : <MdFilterList />}
        </div>
      </div>
      <div className='SlidingDrawerLeftContents'>
        {props.children}
        <div className='SlidingDrawerCloseButton' onClick={e => close()} >BACK TO CARDS</div>
        <Footer />
      </div>
    </div>
  </>
  );
}

export default SlidingDrawerLeft;