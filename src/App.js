import React from 'react';
import './App.css';

import Normalize from 'react-normalize';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'; // Import MaterialUI

import FixedBackground from './components/App/FixedBackground';
import Header from './components/App/Header';
import Body from './components/App/Body';

// import react-vis css for charts
import 'react-vis/dist/style.css';

import bgImage from './img/bg/scholomance-academy-bg.png';



const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  }
});



function App(props) {

  return (
    <>
    <Normalize/>
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <FixedBackground bgImage={bgImage} />
        <Header />
        <Body />
      </div>
    </ThemeProvider>
    </>
  );
}



export default App;
