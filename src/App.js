import React, { Component } from 'react';
import './App.css';
import GameContainer from "./components/GameContainer.jsx"

class App extends Component {
  render() {
    return (
      <div>
        <GameContainer className="center" />
      </div>
    );
  }
}

export default App;
