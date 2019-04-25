import React, { Component } from 'react';
import MainPage from "./Components/MainPage";
import NavBar from "./Components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

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
