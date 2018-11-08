import React, {Component} from 'react';
import Select from 'react-select';
import {Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import { Input } from 'mdbreact'
import Goal from '../components/Goal'
import Result from './Result'
import {Button } from 'mdbreact'


export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams:[],
      matches:[],
      hometeam: '',
      awayteam: '',
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

  componentDidMount() {
    fetch(`https://ballc-backend-api.herokuapp.com/matches`)
    .then(result => result.json())
    .then(matches => this.setState({matches}))

    fetch(`https://ballc-backend-api.herokuapp.com/teams`)
    .then(result => result.json())
    .then(teams => this.setState({teams}))
  }

  getTeamName(id){
    var teamname= ''
    this.state.teams.forEach(team =>
      {
        if(team.team_id === id){
          teamname= team.teamName
        }
      }
    )
    return teamname
  }

  render() {

    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} sm={4}>
              <h2>MATCHES</h2>
              <br/>
              <div className="TeamlistMatch">
                <ListGroup>
                  <div>
                    {this.state.matches.map(name =>
                      <ListGroupItem
                        className="listingplayer"
                        onClick={
                          e => {
                            this.setState({
                              hometeam: name.home_team,
                              awayteam: name.away_team,
                            });
                          }
                        }
                        key={name.match_id}>
                        {this.getTeamName(name.home_team)} vs {this.getTeamName(name.away_team)} on {name.match_date}
                      </ListGroupItem>)}
                  </div>
                </ListGroup>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              {this.getTeamName(this.state.hometeam) ? (
                <h2>{this.getTeamName(this.state.hometeam)}</h2>) : (<h2>Home Team</h2>)}
              <p> SCORE </p>
              <Input
                name="homescore"
                onChange={this.filterUpdateHome.bind(this)}/>

              <div className="ScoreList">
                {this.state.emptyarrayHome.map(team =>
                  <Goal key={team}/>)}
              </div>

            </Col>
            <Col xs={12} sm={4}>
              {this.getTeamName(this.state.awayteam) ? (
                <h2>{this.getTeamName(this.state.awayteam)}</h2>) : (<h2>Away Team</h2>)}
              <p> SCORE </p>
              <Input
                name="awayscore"
                onChange={this.filterUpdateAway.bind(this)}/>
              <div className="ScoreList">
                {this.state.emptyarrayAway.map(team =>
                  <Goal key={team}/>)}
              </div>
              <br/>

              <Button className="formbtnSave" color="primary" onClick={this.delPerson} >Save results</Button>
              <Button className="formbtnDel" color="primary" onClick={this.delPerson} >Delete results</Button>


            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
