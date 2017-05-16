import React, { Component } from 'react';
import Map, {GoogleApiWrapper} from 'google-maps-react'
// import Marker, { Component } from 'google-maps-react'

class Container extends Component {
  onReady(mapProps, map){
    //when map is ready and loaded
  }
  render() {
    const style = {
      width: '55vw',
      height: '55vh'
    }
    return  <Map style={style}  google={this.props.google} zoom={12} />;
  }
}

export default GoogleApiWrapper({apiKey: 'AIzaSyDclkLFJo_xuxRGuoJtjQdlwmUHt2HIqvs'})
(Container);
