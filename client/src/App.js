import React, { Component } from 'react';
import Main from './components/Main.js';
import Books from './components/Books.js';
import Signin from './components/Signin.js';
import Signup from './components/Signup.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DueBooks from './components/DueDate.js';
import Books2 from './components/Books2.js'

import './App.css';
import './animate.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="bodyDiv">
          <Switch>
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/books" component={Books} /> 
            <Route exact path="/duebooks" component={DueBooks} />
            <Route exact path="/books2" component={Books2} />

            <Route component={Main} /> 
          </Switch> 
        </div>
      </BrowserRouter>   
    )
  }
}

export default App;
