require('dotenv').config()
import React, { Component } from 'react';
import './App.css';
import GoogleMaps from './Components/Container';
import CheckBox from './Components/CheckBox';
import './animate.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      checkedPlaces: [],
      places: [{place:"Columbus Circle", lat: 40.768044, lng: -73.982372}]
    };


    this.addToPlaces = this.addToPlaces.bind(this);
  }
  addToPlaces(obj) {
    let currentPlaces = this.state.places;
    currentPlaces.push(obj);
    this.setState({
      places: currentPlaces
    })
  }
  render() {
    return (
      <div className="App">
        <h1 className="inTown">inTown<img src={require('../media/taxi.png')} className="lightSpeedIn animated taxiSize" /></h1>
        <div className="boxAndGoogleMap">
          <div className="CheckBox"><CheckBox addToPlaces={this.addToPlaces} /></div>
          <div className="GoogleMaps"><GoogleMaps places={this.state.places} state={this.state.checkedPlaces}/></div>
          <renderMarkers />
        </div>
      </div>

    );
  }
}

export default App;
