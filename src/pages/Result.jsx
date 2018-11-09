import React, {Component} from 'react';
import {Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import { Input } from 'mdbreact'
import Goal from '../components/Goal'

import { FormattedMessage } from 'react-intl';

import {Button } from 'mdbreact'
import {PostData} from '../PostData';



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
      match_id: '',
      players:[],
      goaltypes:[],

      homegoals: [],
      awaygoals: [],

    };

    this.handleChangePlayerHome = this.handleChangePlayerHome.bind(this);
    this.handleChangePlayerAway = this.handleChangePlayerAway.bind(this);

    this.handleChangeGoalHome = this.handleChangeGoalHome.bind(this);
    this.handleChangeGoalAway = this.handleChangeGoalAway.bind(this);

    let playerHome = '';
    let goalTypeHome = '';
    let playerAway = '';
    let goalTypeAway = '';
    let goalsHome = {};
    let goalsAway = {};

  }

  for (i = 0; i < this.state.homescore.value; i++){
    return(<Goal 
      selectedPlayer=""
      handleChangePlayer={this.handleChangePlayer}
      players=""
      selectedGoal=""
      handleChangeGoal={this.handleChangeGoal}
      goaltypes=""
      selectgoal={this.selectgoal}
    />)
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

    fetch(`https://ballc-frontend-be.herokuapp.com/playersformatch`)
    .then(result => result.json())
    .then(players => this.setState({players}))

    fetch(`https://ballc-frontend-be.herokuapp.com/goaltypeformatch`)
    .then(result => result.json())
    .then(goaltypes => this.setState({goaltypes}))
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


  handleChangePlayerHome = (selectedPlayer) => {

    this.playerHome = selectedPlayer;
    console.log(`Option selected:`, this.playerHome);
  }
  
  handleChangeGoalHome = (selectedGoalType) => {
    this.goalTypeHome = selectedGoalType;
    console.log(`Option selected:`, this.goalTypeHome);

  }

  handleChangePlayerAway = (selectedPlayer) => {

    this.playerAway = selectedPlayer;
    console.log(`Option selected:`, this.playerAway);
  }
  
  handleChangeGoalAway = (selectedGoalType) => {
    this.goalTypeAway = selectedGoalType;
    console.log(`Option selected:`, this.goalTypeAway);

  }

  selectgoalHome = () => {
    //let user = Object.assign({}, this.state.goals);    //creating copy of object

    this.goalsHome = {
      player: this.playerHome,
      goaltype: this.goalTypeHome
    }

    //this.setState({goals:user});
    console.log(this.goalsHome);
    this.state.homegoals.push(this.goalsHome);
    console.log(this.state.homegoals);

    
  }

  selectgoalAway = () => {

    this.goalsAway = {
      player: this.playerAway,
      goaltype: this.goalTypeAway
    }

    console.log(this.goalsAway);
    this.state.awaygoals.push(this.goalsAway);
    console.log(this.state.awaygoals);

    
  }

  saveResult = () =>{
    let user = Object.assign({}, this.state);    //creating copy of object

    let data ={
      homescore: user.homescoreHome,
      awayscore: user.homescoreAway,
      hometeam: user.hometeam,
      awayteam: user.awayteam,
      match_id: user.match_id
       
    }
    //PostData('result', data);

    var newhome = this.state.homegoals.slice();

    let data2 = {
      homegoals: this.state.homegoals,
      awaygoals: this.state.awaygoals,
      match_id: user.match_id

    }

    PostData('addgoal', data2);


  }

  render() {
    /*
    const { selectedPlayer } = this.state.players;
    const { selectedGoal } = this.state.goaltypes;
*/
    
    let players = this.state.players
    let goaltypes = this.state.goaltypes




    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} sm={4}>
              <h2>
              <FormattedMessage
              id="RESULT.matchesTitle"
              defaultMessage="MATCHES"
              />
              </h2>
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
                              match_id: name.match_id
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
              <p> 
              <FormattedMessage
              id="RESULT.homeScoreTitle"
              defaultMessage="SCORE"
              />
              </p>
              <Input
                name="homescore"
                onChange={this.filterUpdateHome.bind(this)}/>

              <div className="ScoreList">
                {this.state.emptyarrayHome.map(team =>
                <div key={team}>
                
                <hr/>
        
                <div className="newScore">
                  <p>Select player</p>
                  <Select
                    value={this.playerHome}
                    onChange={this.handleChangePlayerHome}
                    options={players}
                  />
                  <br/>
                  <p>Select goaltype</p>
        
                  <Select
                    value={this.goalTypeHome}
                    onChange={this.handleChangeGoalHome}
                    options={goaltypes}
                  />
        
                  <Button className="formbtnSave" color="primary" onClick={this.selectgoalHome} >Save results</Button>
        
                </div>
              </div>                  
                  
                  )}

           </div>

            </Col>
            <Col xs={12} sm={4}>
              {this.getTeamName(this.state.awayteam) ? (
                <h2>{this.getTeamName(this.state.awayteam)}</h2>) : (<h2>Away Team</h2>)}
              <p>
              <FormattedMessage
              id="RESULT.awayScoreTitle"
              defaultMessage="SCORE"
              />
              </p>
              <Input
                name="awayscore"
                onChange={this.filterUpdateAway.bind(this)}/>
              <div className="ScoreList">
                {this.state.emptyarrayAway.map(team =>
                   <div key={team}>
                
                   <hr/>
           
                   <div className="newScore">
                     <p>Select player</p>
                     <Select
                       value={this.playerAway}
                       onChange={this.handleChangePlayerAway}
                       options={players}
                     />
                     <br/>
                     <p>Select goaltype</p>
           
                     <Select
                       value={this.goalTypeAway}
                       onChange={this.handleChangeGoalAway}
                       options={goaltypes}
                     />
           
                     <Button className="formbtnSave" color="primary" onClick={this.selectgoalAway} >Save results</Button>
           
                   </div>
                 </div>   
                  //this.state.awaygoals.push(goal)

                  
                  )}
                
              </div>
              <br/>


              <Button className="formbtnSave" color="primary" onClick={this.saveResult} >
              <FormattedMessage
              id="RESULT.saveButton"
              defaultMessage="Save results"
              />
              </Button>
              <Button className="formbtnDel" color="primary" onClick={this.delResult} >
              <FormattedMessage
              id="RESULT.delButton"
              defaultMessage="Delete results"
              />
              </Button>



            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
