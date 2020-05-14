import React, { useState, useEffect } from 'react';
import './FilterFormLabel.css';

function FilterFormLabel(props) {
  return (
    <div className='FilterFormLabel'>
      <span className='FilterFormLabelLabel'>{props.label}</span>
      <div className='FilterFormLabelLine' />
    </div>
  );
}

export default FilterFormLabel;