import React, { Component } from 'react';
import Map, { Marker } from 'google-maps-react';
// import CheckBox from './Components/CheckBox';

const style = {
  width: '55vw',
  height: '55vh'
}

class renderMarkers extends Component {
  renderMarkers() {
    // if (this.props.place) { return null }
    // return this.props.place.map(place => {
    //   return <Marker key={place.id}
    //     name={place.id}
    //     place={place}
    //     position={place.geometry.location} />
    // })
    return this.props.places.map( (place, index) => {
      return (
          <Marker key={index}
            name={place.place}
            position={{ lat: place.lat, lng:place.lng }} />
        )
    })
}
  render() {
    return (
      <Map google={ this.props.google }
            className={style}>
        { this.renderMarkers() }
      </Map>
    )
  }
}

export default renderMarkers;
