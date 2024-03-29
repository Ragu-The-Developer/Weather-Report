import Chart from './components/chart'
import React from 'react';
import Predict from './components/prediction'
import Logo from './components/logo.png'
import Overall from './components/overall'
import Pie from './components/pie'
function App() {
  
    return (
    <div className="App">
       <div className='container'>
        <h1 className='header'><img src={ Logo }/></h1>
      
      <h1>Bearish Stocks</h1>
      <Chart />

      <br></br><br></br>
      
      <h1>Bullish Stocks</h1>
      <Predict/>

      <Overall />

      <br></br><br></br>
      <h1>Number of Units</h1>
      <Pie/>

      <div className='footer'>
        <h3>Zerodha @ 2024 - All Rights Reserved</h3>
        
      </div>

      </div>
    </div>
  ); 
};


export default App;
