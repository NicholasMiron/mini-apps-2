import React, {Component} from 'react';
import Frame from './Frame.js';

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  makeFrames() {
    let frames = [];
    for (let i = 1; i <= 10; i++) {
      frames.push(<Frame frameNumber={i} />);
    }
    return frames;
  }

  render() {
    return (
      <div className={'scoreboard'} >{this.makeFrames()} </div>
    )
  }
}

export default ScoreBoard;