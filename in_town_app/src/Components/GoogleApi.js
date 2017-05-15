import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker,
} from "google-maps-react";


class GoogleApi extends Component {
  render() {
    if (!this.props.loaded){
      return<div>Loading...</div>
    }
    return (
      <div className="map">
        <PageMap google={this.props.google} />
      </div>
      )
  }
}


class PageMap extends Component {
  constructor(){
    super();
    this.state = {
      fetching: true
    };
  }
  loadMap(){
    if (this.props && this.props.google){
      const {google} = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
    }
  }
  componentWillMount(){
    fetch("https://maps.googleapis.com/maps/api/js?key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo&libraries=places")
    .then( res => res.json() ).then( res => console.log(res));
  };
  render() {
    return(
        <p> map goes here!</p>
      )
 }
}


export default GoogleApi;








