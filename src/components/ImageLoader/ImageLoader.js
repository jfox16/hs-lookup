import React, { useState } from 'react';

const ImageLoader = ({ className, src, alt, onClick, placeholder }) => {
  const [ loaded, setLoaded ] = useState(false);

  return (
    <>
      {!loaded && placeholder}
      <img
        className={className}
        src={src}
        alt={alt}
        onClick={onClick}
        onLoad={() => setLoaded(true)}
        style={!loaded ? {visibility: true} : {}}
      />
    </>
  );
}

export default ImageLoader;