import React, { Component } from 'react';
import logo from './logo.svg';
import { NumberField, DateField } from 'material-inputfield';
import { Calendar } from 'ch-calendar';
//import InputField from 'md-inputfield/src/InputField'
//import InputField from './InputFieldTest'
import 'material-inputfield/dist/material-inputfield.css'
import 'ch-calendar/dist/ch-calendar.css'
import './App.css';

class App extends Component {

  
  render() {
    const date = new Date()
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <NumberField onSpinButtons onChange={(event) => console.log(event)} name='label' value={2018} type='number' label='Label' />
        <DateField outlined onSpinButtons onChange={(event) => console.log(event)} name='label' value={new Date()} label='Data' />
        {/* <Calendar date={date} toClose={false} onSelect={(date) => {
          console.log(date)
        }} />
        <Calendar isMonth date={date} toClose={false} onSelect={(date) => {
          console.log(date)
        }}/> */}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
