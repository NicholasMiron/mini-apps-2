import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    }
  }

  handleType(e) {
    e.preventDefault();
    this.setState({searchValue:e.target.value})
  }

  handleSearch(e) {
    e.preventDefault();

  }

  render() {
    return (
      <div>
        <input type='text' placeholder='Search Me...' onChange={e => this.handleType(e)}></input>
        <button type='button' onClick={e => this.handleSearch(e)}>Dive Into The Darkness</button>
      </div>
    )
  }
}

export default App;
