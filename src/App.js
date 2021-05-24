import React from 'react'
import './App.css'
import Normalize from 'react-normalize'
import 'react-vis/dist/style.css' // import react-vis css for charts
import 'simplebar/dist/simplebar.min.css' // styles for simplebar

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Main from './components/routes/Main'

function App(props) {
  return (
    <>
      <Normalize />
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </>
  )
}

export default App
