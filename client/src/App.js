import React, { Component } from 'react';
import history from './history';
import Main from './components/Main.js';
import Books from './components/Books.js';
import Signin from './components/Signin.js';
import Footer from './components/Footer.js';
import Signup from './components/Signup.js';
<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DueBooks from './components/DueDate.js';
import Books2 from './components/Books2.js'

=======
import DueBooks from './components/DueBooks.js';
import { Router, Route, Switch } from "react-router-dom";
>>>>>>> upstream/master
import './App.css';
import './animate.css';
import 'moment-range'




class App extends Component {

  render() {

    return (
      <Router history={history} component={App}>
      <div>
        <div className="bodyDiv">
          <Switch>
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
<<<<<<< HEAD
            <Route exact path="/books" component={Books} /> 
            <Route exact path="/duebooks" component={DueBooks} />
            <Route exact path="/books2" component={Books2} />

=======
            <Route exact path="/books" component={Books} />
            <Route exact path="/duebooks" component={DueBooks} />  
>>>>>>> upstream/master
            <Route component={Main} /> 
          </Switch> 
        </div>
        
        </div>
      </Router>   
    )
  }
}

export default App;
