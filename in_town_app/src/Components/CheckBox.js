import React, { Component } from 'react';
// import './App.css';


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
      {place: "Empire State Building", checked: false},
      {place: "Central Park", checked: false},
      {place: "One World Trade Center", checked: false}
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
         <li style={{color: place.checked? "gray" : "black"}}> {place.place} </li>
         <input type="checkbox" checked={place.checked} onChange={ () => this.updateCheckedBox(index)} />
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
              <input type="text" value={this.state.new_place} onChange={this.handleChange}/>
              <button type="submit">Add more?</button>
             </form>
          </div>
        </div>
      );
    }
 }


export default CheckBox;


