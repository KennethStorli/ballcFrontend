import React, { Component} from 'react';
import {Col} from 'react-bootstrap'
import PersonInfo from './PersonInfo'
import './Teams.css'
import { FormattedMessage } from 'react-intl';


export default class Coach extends Component{
    constructor(props) {
      super(props);
      this.state = {
        coaches:[],
        coach: this.props.coach,
      };

    }
    componentWillReceiveProps(nextprop) {
      fetch(`https://ballc-frontend-be.herokuapp.com/coach/${nextprop.coach}`)
      .then(result => result.json())
      .then(coaches => this.setState({coaches}))
    }

    render() {


      return (
          <div>
            <Col xs={12} sm={3}>
              <h1>
              <FormattedMessage
                id="COACH.coachTitle"
                defaultMessage="Coach"
                />
                </h1>
              <hr/>


              <PersonInfo person={this.state.coaches.person}/>

            </Col>
          </div>
          );
          }

          }
