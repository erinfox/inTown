require('dotenv').config()
import React, { Component } from 'react';
import './App.css';
import GoogleApi from './Components/GoogleApi';
import CheckBox from './Components/CheckBox';


class App extends Component {
  componentWillMount() {
    console.log(process.env)

  }
  render() {
    return (
      <div className="App">
        <h1> inTown</h1>

        <CheckBox />
        <GoogleApi loaded={true}/>
        {/*<Map google={window.google} />*/}
      </div>
    );
  }
}

export default App;
