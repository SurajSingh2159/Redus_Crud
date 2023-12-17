import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarChart from './bar';

const App = () => {
    // Sample data, replace with your actual data
    // const chartData = [20, 35, 15, 25, 30];
  
    return (
      <div className="App">
        <h1>React Bootstrap Bar Chart</h1>
        <BarChart />
      </div>
    );
  }

export default App;
