// @flow

import React from "react";
import { injectGlobal } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Resume } from "./containers";

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
`;

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Resume company="" />} />
      <Route
        path="/:company"
        render={props => {
          const company = props.match.params.company || "";
          return <Resume company={company.toLowerCase()} />;
        }}
      />
    </Switch>
  </Router>
);

export default App;
