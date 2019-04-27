import React, {Component} from 'react';
import axios from 'axios';
import EventList from './EventList';
import styles from './styles/styles.css';

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
    axios.get(`/events?q=${this.state.searchValue}&_page=${page}&_limit=10`)
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

  handleEnter(e) {
    e.preventDefault()
    if (e.key === 'Enter') {
      this.handleSearch(e, true);
    }
  }

  render() {
    return (
      <div className={styles.content}>
        <h1 className={styles.header}>Historical Events Finder</h1>
        <div className={styles.input}>
          <input className={styles.search} type='text' placeholder='Search Me...' onChange={e => this.handleType(e)} onKeyUp={e => this.handleEnter(e)}></input>
          <button className={styles.button} type='button' onClick={e => this.handleSearch(e, true)}>Dive Into The Darkness</button>
        </div>
        <EventList events={this.state.eventList}/>
        <div className={styles.pages}>
          <button type='button' onClick={e => this.handlePage(e, -1)}>Back</button>
          <button type='button' onClick={e => this.handlePage(e, 1)}>Next</button>
        </div>
      </div>
    )
  }
}

export default App;
