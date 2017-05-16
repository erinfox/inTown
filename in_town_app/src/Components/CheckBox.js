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

{place: "Staten Island Ferry", checked: false},
{place: "Battery Park", checked: false},
{place: "Governor’s Island", checked: false},
{place: "Seaglass Carousel", checked: false},
{place: "Statue of Liberty", checked: false},
{place: "Ellis Island", checked: false},
{place: "Table Green", checked: false},
{place: "Charging Bull", checked: false},
{place: "Fearless Girl", checked: false},
{place: "Bowling Green", checked: false},
{place: "Stone Street", checked: false},
{place: "Pier 11", checked: false},
{place: "Frances Tavern", checked: false},
{place: "High Line", checked: false},
{place: "9/11 Memorial", checked: false},
{place: "9/11 Museum", checked: false},
{place: "Wall Street", checked: false},
{place: "Federal Hall", checked: false},
{place: "Battery Park", checked: false},
{place: "Chinatown", checked: false},
{place: "Oculus", checked: false},
{place: "Soho", checked: false},
{place: "Woolworth Building", checked: false},
{place: "City Hall Park", checked: false},
{place: "Brooklyn Bridge", checked: false},
{place: "Manhattan Bridge", checked: false},
{place: "Washington Square Park", checked: false},
{place: "West Village", checked: false},
{place: "Hudson River Park", checked: false},
{place: "East Village", checked: false},
{place: "Union Square", checked: false},
{place: "Whitney Museum", checked: false},
{place: "Gramercy Park", checked: false},
{place: "Strand Bookstore", checked: false},
{place: "Madison Square Park", checked: false},
{place: "Flatiron Building", checked: false},
{place: "Bryant Park", checked: false},
{place: "New York Public Library", checked: false},
{place: "Grand Central", checked: false},
{place: "Empire State Building", checked: false},
{place: "Rockefeller Center", checked: false},
{place: "Times Square", checked: false},
{place: "Madison Square Garden", checked: false},
{place: "St. Patrick Cathedral", checked: false},
{place: "MoMA", checked: false},
{place: "Hells Kitchen", checked: false},
{place: "5th Avenue", checked: false},
{place: "Intrepid", checked: false},
{place: "Carnegie Hall", checked: false},
{place: "Columbus Circle", checked: false},
{place: "Central Park", checked: false},
{place: "Bethesda Fountain", checked: false},
{place: "Metropolitan Museum of Art", checked: false},
{place: "Natural History Museum", checked: false},
{place: "Guggenheim Museum", checked: false},
{place: "Broadway", checked: false},
{place: "Chrysler Building", checked: false},
{place: "Williamsburg", checked: false},
{place: "Apollo's Theater", checked: false},
{place: "Prospect Park", checked: false},
{place: "Harlem", checked: false},
{place: "Barclays Center", checked: false},
{place: "Brooklyn Bridge Park", checked: false},
{place: "Columbia University", checked: false}
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
         <li className='myli' style={{color: place.checked? "gray" : "black"}}> {place.place} </li>
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


