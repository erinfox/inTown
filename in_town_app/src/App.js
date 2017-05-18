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
      places: [
        {place:"Columbus Circle", lat: 40.711484, lng: -74.012725},
        {place: "Barclays Center", lat: 40.682495, lng: -73.975035}
      ]
    };
  }

  //   this.addToPlaces = this.addToPlaces.bind(this);
  // }
  // addToPlaces(obj) {
  //   let currentPlaces = this.state.places;
  //   currentPlaces.push(obj);
  //   this.setState({
  //     places: currentPlaces
  //   })
  // }

  addPlace(place){
    this.setState({
      places: this.state.places.concat(place)
    })
  }

  removePlace(place){
    // similar except remove the place
    // don't forget to pass this function to checkbox as props
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1 className="inTown">inTown<img src={require('../media/taxi.png')} className="lightSpeedIn animated taxiSize" /></h1>
        <div className="boxAndGoogleMap">
          <div className="CheckBox"><CheckBox addPlace={this.addPlace.bind(this)} /></div>
        {/*<div className="CheckBox"><CheckBox addToPlaces={this.addToPlaces} /></div>*/}
          <div className="GoogleMaps"><GoogleMaps places={this.state.places} state={this.state.checkedPlaces}/></div>
          <renderMarkers />
        </div>
      </div>

    );
  }
}

export default App;
