require('dotenv').config()
import React, { Component } from 'react';
import './App.css';
import GoogleMaps from './Components/Container';
import CheckBox from './Components/CheckBox';
import './animate.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 className="inTown">inTown<img src={require('../media/taxi.png')} className="lightSpeedIn animated taxiSize" /></h1>
          <div className="boxAndGoogleMap">
          <div className="CheckBox"><CheckBox /></div>
          <div className="GoogleMaps"><GoogleMaps /></div>
        </div>
      </div>

    );
  }
}

export default App;
