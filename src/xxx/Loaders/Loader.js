import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import './Loader.css';

function Loader(props) {
  return (
    <div className="Loader">
      <div>
        <ClipLoader color={'snow'} size={40}/>
      </div>
      <div className='LoaderText'>{props.text}</div>
    </div>
  );
}

export default Loader;