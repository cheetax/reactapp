
import { DateField, NumberField } from 'material-inputfield';
import 'material-inputfield/dist/material-inputfield.css';
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    const date = new Date()
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Test Input Field</h1>
        </header>
        <div className='App-intro' >
          <NumberField onSpinButtons onChange={(event) => console.log(event)} name='label' value={2018} type='number' label='Label' />
          <DateField outlined onSpinButtons onChange={(event) => console.log(event.target.value)} name='label' value={date} label='Data' />
        </div>
      </div>
    );
  }
}

export default App;
