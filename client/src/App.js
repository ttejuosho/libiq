import React, { Component } from 'react';
import Main from './components/Main.js';
import Signin from './components/Signin.js';
import Signup from './components/Signup.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/books" component={Main} /> 
            <Route component={Main} /> 
          </Switch> 
        </div>
      </BrowserRouter>   
    )
  }
}

export default App;
