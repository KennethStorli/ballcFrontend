import React, { Component} from 'react';
import {Col} from 'react-bootstrap'
import './Teams.css'



export default class Coach extends Component{
    constructor(props) {
      super(props);
      this.state = {
        people:[],
        person: this.props.person,
      };

    }
    componentWillReceiveProps(nextprop) {
      fetch(`https://ballc-backend-api.herokuapp.com/persons/${nextprop.person}`)
      .then(result => result.json())
      .then(people => this.setState({people}))
    }

    render() {


      return (
          <div>
            <div className="infoName">
              <h2>{this.state.people.first_name} {this.state.people.last_name}</h2>
            </div>
            <p type="date">{this.state.people.date_of_birth}</p>
          </div>
          );
          }

          }
