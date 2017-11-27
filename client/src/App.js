import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>LibiQ - Built With React</h2>
        </div>
      <Header />
      <Main />
      </div>
    );
  }
}

export default App;
