import React, {Component} from 'react';
import axios from 'axios';
import EventList from './EventList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      eventList: [],
      page: 1,
    }
  }

  getEvents(page) {
    axios.get(`/events?description_like=${this.state.searchValue}&_page=${page}&_limit=10`)
    .then(results => {
      if (results.data.length === 0) this.setState({page: this.state.page - 1});
      else this.setState({eventList: results.data, page: page});
    })
    .catch(error => {
      console.error(error);
    })
  }

  handleType(e) {
    e.preventDefault();
    this.setState({searchValue:e.target.value})
  }

  handleSearch(e, reset=false) {
    e.preventDefault();
    let currentPage = this.state.page;
    if (reset) currentPage = 1;
    this.getEvents(currentPage);
  }

  handlePage(e, direction) {
    e.preventDefault();
    let currentPage = this.state.page;
    let nextPage = currentPage + direction > 0 ? currentPage + direction : 1;
    
    this.setState({page: nextPage}, () => {
      this.handleSearch(e);
    })
  }

  render() {
    return (
      <div>
        <input type='text' placeholder='Search Me...' onChange={e => this.handleType(e)}></input>
        <button type='button' onClick={e => this.handleSearch(e, true)}>Dive Into The Darkness</button>
        <EventList events={this.state.eventList}/>
        <button type='button' onClick={e => this.handlePage(e, -1)}>Back</button>
        <button type='button' onClick={e => this.handlePage(e, 1)}>Next</button>
      </div>
    )
  }
}

export default App;
