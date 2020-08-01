import React from 'react';
import './App.css';

import Normalize from 'react-normalize';

import FixedBackground from './components/App/FixedBackground';
import Header from './components/App/Header';
import Body from './components/App/Body';

// import react-vis css for charts
import 'react-vis/dist/style.css';

import { withResizeDetector } from 'react-resize-detector';

import bgImage from './img/bg/scholomance-academy-bg.png';




function App(props) {

  return (
    <>
    <Normalize/>
      <div className="App" style={{height: window.innerHeight}} >
        <FixedBackground bgImage={bgImage} />
        <Header />
        <Body />
      </div>
    </>
  );
}



export default withResizeDetector(App);
