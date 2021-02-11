import React from 'react';

import './Modal.css';

const Modal = ({ isOpen, closeModal, children }) => {
  return (
    <>
    {isOpen && 
      <div className="Modal" onClick={closeModal}>
        {children}
      </div>
    }
    </>
  );
}

export default Modal;