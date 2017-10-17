// @flow

import React from 'react'
import { injectGlobal } from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { Home } from './containers'

injectGlobal`
  html * {
    font-family: 'Bitter', serif;
    @media print {
      font-size: 13px;
      height: 100%;
    }
  }
`

const App = () => (
  <Router>
    <Route exact path="/" component={Home} />
  </Router>
)

export default App;
