import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import appWindow from './fontplop.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="center">
          <h1>The missing webfont converter for OSX.</h1>
          <img src={appWindow} alt=""/>
          <footer>
            <a href="">Download</a>
            <a href="">Donate</a>
            <a href="">Contribute</a>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
