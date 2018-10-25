import React,  { Component } from 'react';
import Personlist from '../components/Personlist';
import PersonInput from '../components/PersonInput';

export default class User extends Component {
    render(){
      return(
        <div>
          <PersonInput />
          <Personlist/>
        </div>
      )
    }
  }
