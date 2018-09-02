
import { DateField, NumberField, MonthField, QuarterField, YearField } from 'material-inputfield';
import 'material-inputfield/dist/material-inputfield.css';
import React, { Component } from 'react';
import { parse, isDate, isValid, format, addDays } from 'date-fns';
import './App.css';

function toDate(dateStr) {
  const [day, month, year] = dateStr.split("-")
  return new Date(year, month - 1, day)
}

class App extends Component {

  render() {
    const _d = toDate('24-09-2018')
    //var str = new Date();
    const __d = this.props.value && (isDate(this.props.value) ? format(this.props.value, 'DD-MM-YYYY') : format(_d, 'DD-MM-YYYY')) || format(_d, 'DD-MM-YYYY')
    const d = addDays(_d, -1)
    const date = new Date();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Test Input Field</h1>
        </header>
        <h3>Filled text fields</h3>
        <div className='App-intro' >
          <NumberField onSpinButtons onChange={(event) => console.log(event)} name='label' type='number' label='Label' />
          <NumberField onSpinButtons onChange={(event) => console.log(event)} name='label' value={123456789} type='number' label='Label' />
          <DateField onCalendarButton onSpinButtons onChangeObject={(obj) => console.log(obj)} name='date' value='0' label='Date' />
          <MonthField onCalendarButton onSpinButtons onChange={(event) => console.log(event.target.value)} name='month' value={date} label='Month' />
          <QuarterField onSpinButtons onChangeObject={(obj) => console.log(obj)} name='quarter' value={date} label='Quarter' />
          <YearField onSpinButtons onChangeObject={(obj) => console.log(obj)} name='year' value={date} label='Year' />
        </div>
        <h3>Outlined text fields</h3>
        <div className='App-intro' >
          <NumberField outlined onSpinButtons onChange={(event) => console.log(event)} name='label' type='text' label='Label' />
          <NumberField outlined onSpinButtons onChange={(event) => console.log(event)} name='label' value={123456789} type='number' label='Label' />
          <DateField outlined onCalendarButton onSpinButtons onChange={(event) => console.log(event.target.value)} name='date' value={date} label='Date' />
          <MonthField outlined onCalendarButton onSpinButtons onChange={(event) => console.log(event.target.value)} name='month' value={date} label='Month' />
          <QuarterField outlined onSpinButtons onChangeObject={(obj) => console.log(obj)} name='quarter' value={date} label='Quarter' />
          <YearField outlined onSpinButtons onChangeObject={(obj) => console.log(obj)} name='year' value={date} label='Year' />
        </div>
      </div>
    );
  }
}

export default App;
