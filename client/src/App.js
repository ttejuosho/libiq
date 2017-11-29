import React, { Component } from 'react';
import {Link} from "react-router"
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Signup from './components/Signup.js';
import Books from './components/Books.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>LibiQ - Built With React</h2>
        </div>
        {this.props.children}
      {/* <Header /> */}
      {/* <Main /> */}
      {/* <Signup /> */}
      {/* <Books /> */}
      </div>
    );
  }
}

export default App;
