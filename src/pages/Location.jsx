import React, { Component} from 'react';
import {Col} from 'react-bootstrap'
import './Teams.css'



export default class Location extends Component{
    constructor(props) {
      super(props);
      this.state = {
        locations:[],
        location: this.props.location,
      };

    }
    componentWillReceiveProps(nextprop) {
      fetch(`https://ballc-frontend-be.herokuapp.com/location/${nextprop.location}`)
      .then(result => result.json())
      .then(locations => this.setState({locations}))
    }

    render() {


      return (
          <div>
            <Col xs={12} sm={3}>
              <h1>Location</h1>
              <hr/>
              <div className="infoName">
                <h2>{this.state.locations.name}</h2>
              </div>
              <p>{this.state.locations.description}</p>
            </Col>
          </div>
          );
          }

          }
