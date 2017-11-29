// Include the React library
import React from "react";

// Include the react-router module
// Include the Route component
// Include the IndexRoute (catch-all route)
// Include the Router component
// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Reference the high-level components
import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Signin from '../components/Signin.js';
import Signup from '../components/Signup.js';
import Books from '../components/Books.js';
import App from '../App.js';


// Export the Routes
export default (
  // High level component is the Router component.
  <Router>
    <Switch>

      {/* If user selects Search or Saved show the appropriate component */}
      <Route exact path="Signin" component={Signin} />
      <Route exact path="Signup" component={Signup} />
      <Route exact path="Books" component={Main} />
      
      {/* If user selects any other path... we get the Home Route */}
      <Route component={App} />
    
    </Switch>

  </Router>
);
