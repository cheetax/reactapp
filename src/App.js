import React, { Component } from 'react';
import logo from './logo.svg';
import { NumberField, DateField } from 'material-inputfield';
//import { Calendar } from 'ch-calendar';
//import InputField from 'md-inputfield/src/InputField'
//import InputField from './InputFieldTest'
import 'material-inputfield/dist/material-inputfield.css'
//import 'ch-calendar/dist/ch-calendar.css'
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
          <DateField outlined onSpinButtons onChange={(event) => console.log(event.target.value)} name='label' value={new Date()} label='Data' />
        </div>

        {/* <Calendar date={date} toClose={false} onSelect={(date) => {
          console.log(date)
        }} />
        <Calendar isMonth date={date} toClose={false} onSelect={(date) => {
          console.log(date)
        }}/> */}

      </div>
    );
  }
}

export default App;
