import React, { Component } from 'react';
import Board from './Board.js';
import ScoreBoard from './ScoreBoard.js';
import '../styles/styles.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <center><h1>Bowling Score Bored</h1></center>
        <Board />
        <ScoreBoard />
      </div>
    );
  }
}

export default App;
