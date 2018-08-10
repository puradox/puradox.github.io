// @flow

import React from "react";
import { Link, Text } from "../../components";

export function chooseContributions(company: string) {
  switch (company) {
    case "facebook":
      return [
        <Text>
          Component-based user interface,{" "}
          <Link to="https://github.com/facebook/react/pull/6377">
            <b>facebook/react</b>
          </Link>
        </Text>,
        <Text>
          Extendable query language,{" "}
          <Link to="https://github.com/graphql/graphql-js/pull/1061">
            <b>graphql/graphql-js</b>
          </Link>
        </Text>,
        <Text>
          Redux for React forms,{" "}
          <Link to="https://github.com/erikras/redux-form/pull/820">
            erikras/redux-form
          </Link>{" "}
          (React, Redux)
        </Text>,
        <Text>
          File watcher and reloader,{" "}
          <Link to="https://github.com/tockins/realize/pull/84">
            tockins/realize
          </Link>{" "}
          (Go)
        </Text>
      ];
    case "google":
    case "sendgrid":
      return [
        <Text>
          File watcher and reloader,{" "}
          <Link to="https://github.com/tockins/realize/pull/84">
            tockins/realize
          </Link>{" "}
          (<b>Go</b>)
        </Text>,
        <Text>
          Component-based user interface,{" "}
          <Link to="https://github.com/facebook/react/pull/6377">
            facebook/react
          </Link>{" "}
          (JavaScript)
        </Text>,
        <Text>
          Redux for React forms,{" "}
          <Link to="https://github.com/erikras/redux-form/pull/820">
            erikras/redux-form
          </Link>{" "}
          (React, Redux)
        </Text>,
        <Text>
          Extendable query language,{" "}
          <Link to="https://github.com/graphql/graphql-js/pull/1061">
            graphql/graphql-js
          </Link>{" "}
          (JavaScript)
        </Text>
      ];
    default:
      return [
        <Text>
          Component-based user interface,{" "}
          <Link to="https://github.com/facebook/react/pull/6377">
            facebook/react
          </Link>{" "}
          (JavaScript)
        </Text>,
        <Text>
          Redux for React forms,{" "}
          <Link to="https://github.com/erikras/redux-form/pull/820">
            erikras/redux-form
          </Link>{" "}
          (React, Redux)
        </Text>,
        <Text>
          Extendable query language,{" "}
          <Link to="https://github.com/graphql/graphql-js/pull/1061">
            graphql/graphql-js
          </Link>{" "}
          (JavaScript)
        </Text>,
        <Text>
          File watcher and reloader,{" "}
          <Link to="https://github.com/tockins/realize/pull/84">
            tockins/realize
          </Link>{" "}
          (Go)
        </Text>
      ];
  }
}
