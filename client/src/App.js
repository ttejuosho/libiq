import React, { Component } from 'react';
import Main from './components/Main.js';
import Books from './components/Books.js';
import Signin from './components/Signin.js';
import Footer from './components/Footer.js';
import Signup from './components/Signup.js';



import DueBooks from './components/DueBooks.js';
import { Router, Route, Switch } from "react-router-dom";


import './App.css';
import './animate.css';





class App extends Component {

  render() {

    return (
      <Router history={history} component={App}>
      <div>
        <div className="bodyDiv">
          <Switch>
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />

            <Route exact path="/books" component={Books} />
            <Route exact path="/duebooks" component={DueBooks} />  

            <Route component={Main} /> 
          </Switch> 
        </div>
        
        </div>
      </Router>   
    )
  }
}

export default App;
