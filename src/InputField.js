import React, { Component } from 'react';
import logo from './logo.svg';
//import InputField from 'material-inputfield';
import InputField from 'md-inputfield/src/InputField'
import 'md-inputfield/dist/md-inputfield.css'
import './App.css';

class _InputField extends Component {
  _test = () => {
    console.log('test')
  }

  render() {
    return (
      <InputField outlined spinButtons onChange={(event) => console.log(event)} name='year' type='number' label='Год' />
    );
  }
}


export default _InputField;