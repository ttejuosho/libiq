// Inclue the React library
import React from "react";

// Include the react-router module
// Include the Route component
// Include the IndexRoute (catch-all route)
// Include the Router component
// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
import { Route, IndexRoute, Router, browserHistory } from "react-router";

// Reference the high-level components
import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Signup from '../components/Signup.js';
import Books from '../components/Books.js';

// Export the Routes
export default (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Search or Saved show the appropriate component */}
      <Route path="Signup" component={Signup} />
      <Route path="Books" component={Books} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Main} />

    </Route>
  </Router>
);
