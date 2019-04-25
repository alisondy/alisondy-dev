import React, { Component } from 'react';
// import './App.css';
import './alisondy-bootstrap/css/bootstrap.css';
import './alisondy-bootstrap/css/bootstrap-grid.css';

import MainPage from "./Components/MainPage";
import NavBar from "./Components/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <MainPage/>
      </div>
    );
  }
}

export default App;
