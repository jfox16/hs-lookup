import React from 'react';

import './Modal.css';

const Modal = ({ isOpen, closeModal, children }) => {
  return (
    <>
    {isOpen && 
      <div className="Modal fullscreen" onClick={closeModal}>
        {children}
      </div>
    }
    </>
  );
}

export default Modal;