import React from 'react'
import AdSense from 'react-adsense'

const GoogleAd = (props) => {
  return (
    <div crossOrigin="anonymous">
      <AdSense.Google
        client="ca-pub-9033962159068688"
        slot="2168793419"
        style={{ display: 'block', width: 100 }}
        layout="in-article"
        format="fluid"
      />
    </div>
  )
}

export default GoogleAd
