import React, { Component } from 'react';
import Map, {GoogleApiWrapper} from 'google-maps-react'

class Container extends Component {
  render() {
    const style = {
      width: '50vw',
      height: '50vh'
    }
    return  <Map style={style}  google={this.props.google} zoom={14} />;
  }
}

export default GoogleApiWrapper({apiKey: 'AIzaSyDclkLFJo_xuxRGuoJtjQdlwmUHt2HIqvs'})
(Container);
