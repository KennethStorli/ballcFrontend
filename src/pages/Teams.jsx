import React, { Component } from 'react'
import './Home.css'
import Columns from '../components/Columns'


export default class Teams extends Component {
  render() {
    return(
      <div>
        <h2> All teams </h2>
        <Columns></Columns>
      </div>
    )
  }
}
