import React, {Component} from 'react';
import Select from 'react-select';
import {Grid, Row, Col} from 'react-bootstrap'
import { Input } from 'mdbreact'
import Goal from '../components/Goal'
import { FormattedMessage } from 'react-intl';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

export default class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hometeam: this.props.hometeam,
      awayteam: this.props.awayteam,
      homescoreHome: 0,
      homescoreAway: 0,
      emptyarrayHome:[],
      emptyarrayAway:[],


    };

  }
  createGoalHome = () => {
  let homescore = this.state.homescore
  let i = 0

  for (i = 0; i < this.state.homescore.value; i++){
    return(<Goal/>)
  }
}


  filterUpdateHome(event){
    var emptyarray = []
    for(var i = 0; i < event.target.value; i++){
      emptyarray.push(i)
    }
    this.setState({
      homescoreHome: event.target.value,
      emptyarrayHome: emptyarray,
    })

  }
  filterUpdateAway(event){
    var emptyarray = []
    for(var i = 0; i < event.target.value; i++){
      emptyarray.push(i)
    }
    this.setState({
      homescoreAway: event.target.value,
      emptyarrayAway: emptyarray,
    })

  }
  render() {

    return (
      <div>
        <Col xs={12} sm={6}>
          <h2>{this.state.hometeam} </h2>
          <p> 
          <FormattedMessage
          id="RESULT.homeScoreTitle"
          defaultMessage="SCORE"
          />
          </p>
          <Input
            name="homescore"
            onChange={this.filterUpdateHome.bind(this)}/>
          <br/>
          <br/>
          {this.state.emptyarrayHome.map(team =>
            <Goal key={team}/>)}


        </Col>
        <Col xs={12} sm={6}>
          <h2>{this.state.awayteam}</h2>
          <p>
          <FormattedMessage
          id="RESULT.awayScoreTitle"
          defaultMessage="SCORE"
          />
          </p>
          <Input
            name="awayscore"
            onChange={this.filterUpdateAway.bind(this)}/>
          <br/>
          <br/>
          {this.state.emptyarrayAway.map(team =>
            <Goal key={team}/>)}
        </Col>
      </div>
    );
  }
}
