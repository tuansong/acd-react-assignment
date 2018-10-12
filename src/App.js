import React, { Component } from 'react';
import './App.css';

import { Doughnut } from 'react-chartjs-2';
import KeyBoard from './components/KeyBoard/KeyBoard';
import ResultScreen from './components/ResultScreen/ResultScreen';

class App extends Component {
  render() {
    let chartData = {
      datasets: [{
        data: [28.79, 21.04, 19.73, 14.83, 7.80, 7.80],
        backgroundColor: [
          'rgb(25, 144, 255)',
          'rgb(19, 194, 194)',
          'rgb(47, 194, 91)',
          'rgb(250, 204, 20)',
          'rgb(240, 72, 100)',
          'rgb(133, 67, 224)'
        ],
        hoverBorderWidth: 10,
        borderColor: 'rgba(0, 0, 0, 0.5)'
      }],
      labels: [
        'React.js | 28.79%',
        'Jquery.js | 21.04%',
        'HTML | 19.73%',
        'Vue.js | 14.83%' ,
        'TypeScript.js | 7.80%',
        'CoffeeScript | 7.80%'
      ]
    }
    let chartOption = {
      cutoutPercentage: 80,
      title: {
        display: true,
        text: 'Visualization',
        position: 'top',
        fontSize: 30,
        color: 'white',
      },
      scaleLabel: {
        display: true
      },
      padding: 2
    }
    return (
      <div className="App">
        <header className="App-header">
          <Doughnut data={chartData} options={chartOption} />
          <h3 className="cal">CALCULATOR</h3>
          <ResultScreen />
          <KeyBoard />
        </header>
      </div>
    );
  }
}

export default App;
