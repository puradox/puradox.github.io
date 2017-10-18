// @flow

import React from 'react'
import { injectGlobal } from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { Home } from './containers'

injectGlobal`
  html body {
    margin: 0;
  }

  #root {
    @media print {
      width: 8.5in;
      height: 11in;
      font-size: 13px;
    }
  }
`

const App = () => (
  <Router>
    <Route exact path="/" component={Home} />
  </Router>
)

export default App;
