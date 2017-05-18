require('dotenv').config()
// var Mailto = require('react-mailto');
import Mailto from 'react-mailto'
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
        // {place:"Columbus Circle", lat: 40.711484, lng: -74.012725},
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


    // this.setState({
    //   if this.addPlace = unchecked {
    //     this.unchecked =
    //   }
    //   places: this.state.places.remove()
    // })
  }

    renderMessage() {
      const places = JSON.stringify(this.state.places);
        return places
      // to stringify on the array of checked places
      // return this.sate.places.stringify
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
            <Mailto email="erinkayfox@gmail.com" headers={{body: this.renderMessage()}} obfuscate={true}>
              Email Me
        </Mailto>
      </div>
        </div>

    );
  }
}

export default App;
