
import { DateField, NumberField, MonthField, QuarterField, YearField, PeriodField } from 'material-inputfield';
import 'material-inputfield/dist/material-inputfield.css';
import { SelectedListView } from 'selected-list-view'
//import { Calendar } from 'ch-calendar'
//import Switch from '@material-ui/core/Switch';
import React, { Component } from 'react';
import './App.css';
import 'ch-calendar/dist/ch-calendar.css'
import 'selected-list-view/dist/selected-list-view.css'


var users = [
  {
    firstName: 'Ivan',
    surName: 'Petrov',
    email: 'ivan@mail.com'
  },
  {
    firstName: 'Petro',
    surName: 'Ivanov',
    email: 'petro@mail.com'
  },
  {
    firstName: 'John',
    surName: 'Ivanov',
    email: 'john@mail.com'
  },
  {
    firstName: 'Ilon',
    surName: 'Petrov',
    email: 'ilon@mail.com'
  },
  
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  rowRenderer = ({ item }) => {
    return [
      <span>{item.firstName} {item.surName}</span>,
      <span>{item.email}</span>
    ]
  }

  _valueSelectedUser = () => this.state.selectedUser && this.state.selectedUser.firstName + ' ' + this.state.selectedUser.surName
 
  headerRenderer = (param) => [<span width={100} style={param.style}   >Пользователи</span>,
  <span />]

  _selectedListView = () => <SelectedListView
    isField
    isModal
    isButtonActive
    Width={300}
    Height={500}
    //  headerRenderer={this.headerRenderer}
    className='collection'
    items={users}
    rowRenderer={this.rowRenderer}
    setSelectedIndex={this.state.selectedIndex}
    onSelectedIndex={(index) => {
      this.setState({
        selectedUser: users[index],
        edit: false,
        selectedIndex: index,
        newUser: {},
      })
    }}
  />

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <h1 className="App-title">Test Input Field</h1>
        </header>
        <h3>Filled text fields</h3> */}

        <div className='App-intro' >
          <NumberField
            outlined
            readOnly
           // onSpinButtons
            onChange={(event) => console.log(event)}
            name='label' value={this._valueSelectedUser()}
            type='text'
            label='Label'
            extSpinButton={this._selectedListView} />
          <SelectedListView
            isButtonActive
            Width={300}
            Height={500}
            headerRenderer={this.headerRenderer}
            className='collection'
            items={users}
            rowRenderer={this.rowRenderer}
            setSelectedIndex={this.state.selectedIndex}
            onSelectedIndex={(index) => {
              this.setState({
                selectedUser: users[index],
                edit: false,
                selectedIndex: index,
                newUser: {},
              })
            }}
          />
        </div>
      </div>
    );
  }
}

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       checkedA: false,
//       checkedB: true,
//     }
//   }

//   handleChange = name => event => {
//     this.setState({ [name]: event.target.checked });
//   };

//   _renderBtnSpin = () => <div>A</div>

//   render() {
//     const date = new Date();
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Test Input Field</h1>
//         </header>
//         <div className='App-intro'>
//         </div>
//         <h3>Filled text fields</h3>
//         <div className='App-intro' >
//           <PeriodField onSpinButtons onChange={(event) => console.log(event)} name='label' type='number' label='Label' extSpinButton={this._renderBtnSpin} />
//           <NumberField onSpinButtons onChange={(event) => console.log(event)} name='label' value={123456789} type='number' label='Label' />
//           <DateField onCalendarButton onSpinButtons onChangeObject={(obj) => console.log(obj)} name='date' value={date} label='Date' />
//           <MonthField onCalendarButton onSpinButtons onChangeObject={(obj) => console.log(obj)} name='month' value={date} label='Month' />
//           <QuarterField onSpinButtons onChangeObject={(obj) => console.log(obj)} name='quarter' value={date} label='Quarter' />
//           <YearField onSpinButtons onChangeObject={(obj) => console.log(obj)} name='year' value={date} label='Year' />
//         </div>
//         <h3>Outlined text fields</h3>
//         <div className='App-intro' >
//           <PeriodField outlined onSpinButtons onChange={(event) => console.log(event)} name='label' type='text' label='Label' />
//           <NumberField outlined onSpinButtons onChange={(event) => console.log(event)} name='label' value={123456789} type='number' label='Label' />
//           <DateField outlined onCalendarButton onSpinButtons onChange={(event) => console.log(event.target.value)} name='date' value={date} label='Date' />
//           <MonthField outlined onCalendarButton onSpinButtons onChange={(event) => console.log(event.target.value)} name='month' value={date} label='Month' />
//           <QuarterField outlined onSpinButtons onChangeObject={(obj) => console.log(obj)} name='quarter' value={date} label='Quarter' />
//           <YearField outlined onSpinButtons onChangeObject={(obj) => console.log(obj)} name='year' value={date} label='Year' />
//         </div>
//       </div>
//     );
//   }
// }

export default App;
