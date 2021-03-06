import React, { Component } from 'react';
import {Glyphicon} from 'react-bootstrap';
import { Col } from 'react-bootstrap';



export default class Search extends Component{

  filterUpdate(){
    const val = this.myValue.value
    this.props.filterUpdate(val)
  }

  render(){
    return(
      <div>
        <Col sm={1}>
          <Glyphicon glyph="search" className="searchicon"/>
        </Col>
        <Col sm={11}>
          <input
            className="search"
            id="search"
            type="text"
            ref={ (value) => {this.myValue = value}   }
            onChange={this.filterUpdate.bind(this)}/>
        </Col>
      </div>


    )
  }
}
