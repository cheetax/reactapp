
import { DateField, NumberField, MonthField, QuarterField, YearField } from 'material-inputfield';
import 'material-inputfield/dist/material-inputfield.css';
import { Calendar } from 'ch-calendar'
import Switch from '@material-ui/core/Switch';
import React, { Component } from 'react';
import './App.css';
import 'ch-calendar/dist/ch-calendar.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkedA: false,
      checkedB: true,
    }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  _renderBtnSpin = () => <div>A</div>

  render() {
    const date = new Date();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Test Input Field</h1>
        </header>
        {/* <Switch
          checked={this.state.checkedA}
          onChange={this.handleChange('checkedA')}
          value="checkedA"
        /> */}
        {/* <div className='App-intro'><Calendar isModal isActive={this.state.checkedA} isMonth date={date} onSelect={(date) => { console.log(date) }} /> </div> */}
        <div className='App-intro'>           
          {/* modal<Calendar toClose={false} isModal isButtonActive onSelect={(date) => { console.log(date) }} />
          isActive<Calendar toClose isActive={this.state.checkedA} isButtonActive onSelect={(date) => { this.setState({ checkedA: !this.state.checkedA }); console.log(this.state.checkedA) }} /> */}
          {/* <Calendar isModal isActive onSelect={(date) => { console.log(date); this.setState({ checkedA: !this.state.checkedA }); }} /> */}
          {/* Not close<Calendar toClose={false} isActive onSelect={(date) => { console.log(date) }} /> */}
        </div>
        <h3>Filled text fields</h3>
        <div className='App-intro' >
          <NumberField onSpinButtons onChange={(event) => console.log(event)} name='label' type='number' label='Label' extSpinButton={this._renderBtnSpin} />
          <NumberField onSpinButtons onChange={(event) => console.log(event)} name='label' value={123456789} type='number' label='Label' />
          <DateField onCalendarButton onSpinButtons onChangeObject={(obj) => console.log(obj)} name='date' value={date} label='Date' />
          <MonthField onCalendarButton onSpinButtons onChangeObject={(obj) => console.log(obj)} name='month' value={date} label='Month' />
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
