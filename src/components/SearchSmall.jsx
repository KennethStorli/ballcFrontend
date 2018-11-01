import React, { Component } from 'react';
import {Glyphicon} from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import './SearchSmall.css'



export default class Search extends Component{

  filterUpdate(){
    const val = this.myValue.value
    this.props.filterUpdate(val)
  }

  render(){
    return(
      <div className="SmallSearch">
        <Col sm={1}>
          <Glyphicon glyph="search" className="searchicon"/>
        </Col>
        <Col sm={4}>
          <input
            className="SmallSearch"
            id="search"
            type="text"
            ref={ (value) => {this.myValue = value}   }
            onChange={this.filterUpdate.bind(this)}/>
        </Col>
      </div>


    )
  }
}
