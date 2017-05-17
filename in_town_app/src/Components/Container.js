import React, { Component } from 'react';
import Map, {GoogleApiWrapper, Marker} from 'google-maps-react';

class Container extends Component {
  constructor() {
    super();

    this.renderMarkers = this.renderMarkers.bind(this);
  }
  onReady(mapProps, map){
    //when map is ready and loaded
  }
  renderMarkers(){
    return this.props.places.map( (place, index) => {
      return (
          <Marker
            key={index}
            name={place.place}
            position={{ lat: place.lat, lng:place.lng }} />
        )
    })
  };
  render() {
    const style = {
      width: '55vw',
      height: '55vh'
    }
    return (
    <Map style={style}
      zoom={12}
      onReady={this.onReady.bind(this)}
      google={this.props.google}
      mapCenter={{lat: 40.748817, lng: -73.985428}}
      >
      { this.renderMarkers() }
    </Map>
    )
  }
}

export default GoogleApiWrapper({apiKey: 'AIzaSyDclkLFJo_xuxRGuoJtjQdlwmUHt2HIqvs'})
(Container);
