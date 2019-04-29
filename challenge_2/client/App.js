import React, { Component } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2'
import Chart from "react-apexcharts";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       currentData: {},
       startDate: '',
       endDate: '',
       options: {
        title: {
          text: 'CandleStick Chart',
          align: 'left'
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        }
      },
      series: [],
    }
  }
  
  componentDidMount() {
    this.getHistoricalData();
    this.getTestData();
  }

  getTestData() {
    console.log('hie')
    axios.get(`https://api.nomics.com/v1/currencies/sparkline?key=771451a91285eb0d760e12464a25a848&start=2018-04-14T00%3A00%3A00Z&end=2018-05-14T00%3A00%3A00Z`)
    .then(results => {
      console.log(results);
    })
    .catch(error => {
      console.error(error);
    })
  }

  getHistoricalData(start = '2019-03-27', end = '2019-04-27') {
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`)
    .then(results => {
      const newData = {labels:[], datasets: [{label:'Historical Info', data:[]}]};
      for (let day in results.data.bpi) {
        newData.labels.push(day);
        newData.datasets[0].data.push(results.data.bpi[day])
      }

      this.setState({currentData: newData});
    })
    .catch(error => {
      console.error(error);
    })
  }

  handleDateChange(e, start) {
    console.log('in here', e.target.value)
    if (start) this.setState({start: e.target.value})
    else this.setState({end: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getHistoricalData(this.state.start, this.state.end);
  }

  render() {
    return (
      <div>
        <input type='date' onChange={(e) => this.handleDateChange(e, true)}></input>
        <input type='date' onChange={(e) => this.handleDateChange(e, false)}></input>
        <button type='button' onClick={(e) => this.handleSubmit(e)}>Change Me</button>
        <Line data={this.state.currentData}/>
        {/* <Chart options={this.state.options} type='candlestick' series={this.state.series}/> */}
      </div>
    )
  }
}

export default App;

