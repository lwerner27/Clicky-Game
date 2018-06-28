import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav.jsx"
import GameContainer from "./components/GameContainer.jsx"

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <GameContainer />
      </div>
    );
  }
}

export default App;
