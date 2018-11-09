import React, { Component} from 'react';
import {Col} from 'react-bootstrap'
import './Teams.css'
import { FormattedMessage } from 'react-intl';


export default class Association extends Component{
    constructor(props) {
      super(props);
      this.state = {
        associations:[],
        association: this.props.association,
      };

    }
    componentWillReceiveProps(nextprop) {
      fetch(`https://ballc-frontend-be.herokuapp.com/association/${nextprop.association}`)
      .then(result => result.json())
      .then(associations => this.setState({associations}))
    }

    render() {


      return (
          <div>
            <Col xs={12} sm={3}>
              <h1>
              <FormattedMessage
                id="ASSOCIATION.assTitle"
                defaultMessage="Association"
                />
                </h1>
              <hr/>
              <div className="infoName">
                <h2>{this.state.associations.name}</h2>
              </div>

              <p>{this.state.associations.description}</p>
            </Col>
          </div>
          );
          }

          }
