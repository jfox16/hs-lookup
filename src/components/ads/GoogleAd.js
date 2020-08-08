import React from 'react';
import AdSense from 'react-adsense';

const GoogleAd = (props) => {
  return (
    <AdSense.Google
      client='ca-pub-9033962159068688'
      slot='2168793419'
      style={{ display: 'block' }}
      layout='in-article' 
      format='fluid'
    />
  );
}

export default GoogleAd;