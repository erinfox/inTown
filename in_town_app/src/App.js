require('dotenv').config()
import React, { Component } from 'react';
import './App.css';
import GoogleMaps from './Components/Container';
import CheckBox from './Components/CheckBox';


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1> inTown</h1>
        <CheckBox />
        <GoogleMaps />
      </div>
    );
  }
}

export default App;
