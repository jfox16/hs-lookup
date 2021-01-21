import React from 'react';
//@ts-ignore
import Normalize from 'react-normalize';

// IMPORT REACT ROUTER ELEMENTS
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// -- APPEND PAGE IMPORTS HERE --
import Lookup from 'src/pages/Lookup';

const App = () => {

  return (
    <>
    <Normalize/>
    <Router>
      <Switch>
        {/* -- APPEND PAGE ROUTES HERE -- */}
        <Route path='/' component={Lookup} />
      </Switch>
    </Router>
    </>
  );
}



export default App;
