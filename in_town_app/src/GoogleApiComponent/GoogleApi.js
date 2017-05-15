import React, { Component } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker,
} from "google-maps-react";


class Container extends Component {
  render() {
    if (!this.props.loaded){
      return<div>Loading...</div>

    }
    return (
      <div className="map">
        <Map google={this.props.google} />
      </div>
      )
  }
}


class Map extends Component {
  constructor(){
    super();
    this.state = {
    fetching: true
  }
 }
     // loadMap(){
    //   if (this.props && this.props.google){
    //     const {google} = this.props;
    //     const maps = google.maps;
    //     const mapRef = this.refs.map;
    //   }
    // }
    // componentWillMount(){
    //   fetch("https://maps.googleapis.com/maps/api/js?key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo&libraries=places")
    //   .then( res => res.json() ).then( res => console.log(res));
    // };
    render() {
      <div>
        <p> I'm a map</p>
      </div>
    }
}


export default Container;
// export default GoogleApi({
//   apiKey: AIzaSyDclkLFJo_xuxRGuoJtjQdlwmUHt2HIqvs
// })(Container)







