import React, { Component } from 'react';

class CheckBox extends Component {
  constructor() {
    super();
    this.state = {
      // fetching: true,
      places: [],
      new_place: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  componentWillMount(){
    const newPlaces = [

{place: "Staten Island Ferry", lat: 40.671946, lng: -74.042495, checked: false},
{place: "Battery Park", lat: 40.703277, lng: -74.017028, checked: false},
{place: "Governor’s Island", lat: 40.689450, lng: -74.016792, checked: false},
{place: "Seaglass Carousel", lat: 40.702160, lng: -74.014991, checked: false},
{place: "Statue of Liberty", lat: 40.689249, lng: -74.044500, checked: false},
{place: "Ellis Island", lat: 40.699475, lng: -74.039559, checked: false},
{place: "Table Green", lat: 40.701745, lng: -74.015495, checked: false},
{place: "Charging Bull", lat: 40.705554, lng: -74.013444, checked: false},
{place: "Fearless Girl", lat: 40.705620, lng: -74.013398, checked: false},
{place: "Stone Street", lat: 40.704038, lng: -74.011597, checked: false},
{place: "High Line", lat: 40.747459, lng: -74.005017, checked: false},
{place: "9/11 Memorial", lat: 40.711484, lng: -74.012725, checked: false},
{place: "9/11 Museum", lat: 40.711484, lng: -74.012725, checked: false},
{place: "Wall Street", lat: 40.706877, lng: -74.011265, checked: false},
{place: "Federal Hall", lat: 40.707399, lng: -74.010209, checked: false},
{place: "Chinatown", lat: 40.715751, lng: -73.997031, checked: false},
{place: "Oculus", lat: 40.711591, lng: -74.0114824, checked: false},
{place: "Soho", lat: 40.723301, lng: -74.002988, checked: false},
{place: "Woolworth Building", lat: 40.712430, lng: -74.008355, checked: false},
{place: "Brooklyn Bridge", lat: 40.706086, lng: -73.996864, checked: false},
{place: "Manhattan Bridge", lat: 40.707496, lng: -73.990774, checked: false},
{place: "Washington Square Park", lat: 40.730823, lng: -73.997332, checked: false},
{place: "West Village", lat: 40.735781, lng: -74.003571, checked: false},
{place: "Hudson River Park", lat: 40.734164, lng: -74.011144, checked: false},
{place: "East Village", lat: 40.726477, lng: -73.981534, checked: false},
{place: "Union Square", lat: 42.379664, lng: -71.095696, checked: false},
{place: "Whitney Museum", lat: 40.739588, lng: -74.008863, checked: false},
{place: "Gramercy Park", lat: 40.736778, lng: -73.984472, checked: false},
{place: "Strand Bookstore", lat: 40.733258, lng: -73.990791, checked: false},
{place: "Madison Square Park", lat: 40.742037, lng: -73.987563, checked: false},
{place: "Flatiron Building", lat: 40.741061, lng: -73.989699, checked: false},
{place: "Bryant Park", lat: 40.753597, lng: -73.983233, checked: false},
{place: "New York Public Library", lat: 40.753182, lng: -73.982253, checked: false},
{place: "Grand Central", lat: 40.752726, lng: -73.977229, checked: false},
{place: "Empire State Building", lat: 40.748441, lng: -73.985664, checked: false},
{place: "Rockefeller Center", lat: 40.758740, lng: -73.978674, checked: false},
{place: "Times Square", lat: 40.758895, lng: -73.985131, checked: false},
{place: "Madison Square Garden", lat: 40.750504, lng: -73.993439, checked: false},
{place: "St. Patrick Cathedral", lat: 40.758465, lng: -73.975993, checked: false},
{place: "MoMA", lat: 40.761433, lng: -73.977622, checked: false},
{place: "Hells Kitchen", lat: 40.763758, lng: -73.991818, checked: false},
{place: "5th Avenue", lat: 40.731412, lng: -73.996985, checked: false},
{place: "Intrepid", lat: 40.764527, lng: -73.999608, checked: false},
{place: "Carnegie Hall", lat: 40.765126, lng: -73.979924, checked: false},
{place: "Columbus Circle", lat: 40.768044, lng: -73.982372, checked: false},
{place: "Central Park", lat: 40.782865, lng: -73.965355, checked: false},
{place: "Bethesda Fountain", lat: 40.773820, lng: -73.970818, checked: false},
{place: "Metropolitan Museum of Art", lat: 40.779437, lng: -73.963244, checked: false},
{place: "Natural History Museum", lat: 40.443450, lng: -79.950705, checked: false},
{place: "Pier 11 - South Street Sea Port", lat: 40.703574, lng: -74.006612, checked: false},
{place: "Guggenheim Museum", lat: 40.782980, lng: -73.958971, checked: false},
{place: "Broadway Show", lat: 40.756174, lng: -73.987937, checked: false},
{place: "Chrysler Building", lat: 40.751621, lng: -73.975502, checked: false},
{place: "Williamsburg", lat: 37.270702, lng: -76.707457, checked: false},
{place: "Apollo's Theater", lat: 40.810018, lng: -73.950056, checked: false},
{place: "Prospect Park", lat: 40.660204, lng: -73.968956, checked: false},
{place: "Harlem", lat: 40.811550, lng: -73.946477, checked: false},
{place: "Barclays Center", lat: 40.682495, lng: -73.975035, checked: false},
{place: "Brooklyn Bridge Park", lat: 40.700291, lng: -73.996699, checked: false},
{place: "Columbia University", lat: 40.807536, lng: -73.962573, checked: false}
  ];
    const currentPlaces = this.state.places;
    this.setState({
      places: currentPlaces.concat(newPlaces)
    });
  };
  renderPlaces(){
    const individualPlace = this.state.places;
    return individualPlace.map( (place, index) => {
      return(
        <div key={index}>
         <input type="checkbox" checked={place.checked} onChange={ () => this.updateCheckedBox(index)} />
         <li className='myli' style={{color: place.checked? "light gray" : "black"}}> {place.place} </li>
         </div>
        )
    });
  };


  updateCheckedBox(x){
    let allPlaces = this.state.places;
    let selectedPlace = allPlaces[x];
    if (selectedPlace.checked === false) {
      selectedPlace.checked = true
    } else {
      selectedPlace.checked = false
    };
    allPlaces[x] = selectedPlace;
    this.setState({
      places: allPlaces
    });
    };

    handleChange(event){
      this.setState({
        new_place: event.target.value
      });
    };

    handleSubmit(event){
      const newPlace = this.state.new_place;
      const currentPlaces = this.state.tasks;
      currentPlaces.push({place: newPlace, checked: false});
      this.setState({
        places: currentPlaces,
        new_place: ''
      });
      event.preventDefault();
    };

    render() {
      return (
        <div className="CheckBox">
          <h3>What do you want to do in NYC?</h3>
          <div>
            <ul>
              { this.renderPlaces() }
            </ul>
          </div>
          <div>
            <form onSubmit={ this.handleSubmit }>
             {/* <input type="text" value={this.state.new_place} onChange={this.handleChange}/>}*/}
              {/*<button type="submit">Submit!</button>*/}
             </form>
          </div>
        </div>
      );
    }
 }


export default CheckBox;


