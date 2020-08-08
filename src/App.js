import React from 'react';
import './App.css';
import Normalize from 'react-normalize';
import 'react-vis/dist/style.css'; // import react-vis css for charts

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Main from './components/routes/Main';
import Ads from './components/routes/Ads';


function App(props) {

  return (
    <>
    <Normalize/>
    <Router>
      <Switch>
        <Route path='ads.txt' component={Ads} />
        <Route exact path='/' component={Main} />
      </Switch>
    </Router>
    </>
  );
}



export default App;
