import React, {Component} from 'react';
import Select from 'react-select';
import {Grid, Row, Col} from 'react-bootstrap'
import {Button } from 'mdbreact'
import { FormattedMessage } from 'react-intl';

import DayPicker from 'react-day-picker';
import Matchpositions from '../components/Matchpositions'
import {PostData} from '../PostData';
import axios from 'axios';



export default class Match extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamsformatch:[],
      seasons:[],
      home: [],
      away: [],
      homeID:'',
      awayID:'',
      selectedOptionHome:'',
      selectedOptionAway: '',
      selectedOptionSeason:'',
      selectedDay:undefined,
      selectedDayString:'',
      positionsHome: [],
      positionsAway: []

    };
  this.handleDayClick = this.handleDayClick.bind(this);
  }



  handleDayClick(day, { selected, disabled }) {

   if (disabled) {
     return;
   }
   if (selected) {
     this.setState({ selectedDay: undefined });
     return;
   }
   this.setState({
     selectedDay: day,
     selectedDayString: day.toLocaleDateString('en-GB')
   });
 }

  componentDidMount() {
    fetch(`https://ballc-frontend-be.herokuapp.com/teamsformatch`)
    .then(result => result.json())
    .then(teamsformatch => this.setState({teamsformatch}))

    fetch(`https://ballc-frontend-be.herokuapp.com/seasonslist`)
    .then(result => result.json())
    .then(seasons => this.setState({seasons}))
  }

    componentWillReceiveProps(nextprop){
      fetch(`https://ballc-frontend-be.herokuapp.com/playersteam/${nextprop.homeID}`)
      .then(result => result.json())
      .then(home => this.setState({home}))

      fetch(`https://ballc-frontend-be.herokuapp.com/playersteam/${nextprop.awayID}`)
      .then(result => result.json())
      .then(away => this.setState({away}))
    }

  handleChangeHome = (selectedOptionHome) => {
    this.setState({ selectedOptionHome,
    homeID:selectedOptionHome.value });
    console.log(`Hometeam:`, selectedOptionHome);
  }
  handleChangeAway = (selectedOptionAway) => {
    this.setState({ selectedOptionAway,
    awayID:selectedOptionAway.value });
    console.log(`Awayteam:`, selectedOptionAway);
  }
  handleChangeSeason = (selectedOptionSeason) => {
    this.setState({ selectedOptionSeason});
  }

  getDataHome = (data) =>{
    console.log(data);
    this.setState({positionsHome: data});
  }

  getDataAway = (data) =>{
    console.log(data);
    this.setState({positionsAway: data});
  }

  addMatch = () =>{
    let user = Object.assign({}, this.state);    //creating copy of object

    var data = {
      match_date: user.selectedDayString,
      season: user.selectedOptionSeason,
      home_team: user.selectedOptionHome,
      away_team: user.selectedOptionAway,
      positionsHome: user.positionsHome,
      positionsAway: user.positionsAway

    }
    PostData('/addmatch', data)
  }

  render() {
    const { selectedOptionHome } = this.state.teamsformatch;
    const { selectedOptionAway } = this.state.teamsformatch;
    const { selectedOptionSeason } = this.state.seasons;


    return (
      <div>
        <Grid>
          <Row>
            <br/>
            <Col xs={12} sm={4}></Col>
            <Col xs={12} sm={4}>
              <p>
              <FormattedMessage
              id="MATCH.seasonTitle"
              defaultMessage="SEASON"
              />
              </p>
              <Select
                value={selectedOptionSeason}
                onChange={this.handleChangeSeason}
                options={this.state.seasons}
              />
            </Col>
            <br/><br/><br/>
            <Col xs={12} sm={6}>
              <p>
              <FormattedMessage
              id="MATCH.homeTeamTitle"
              defaultMessage="HOME TEAM"
              />
              </p>
              <Select
                value={selectedOptionHome}
                onChange={this.handleChangeHome}
                options={this.state.teamsformatch}
              />
            </Col>
            <Col xs={12} sm={6}>
              <p>
              <FormattedMessage
              id="MATCH.awayTeamTitle"
              defaultMessage="AWAY TEAM"
              />
              </p>

              <Select
                value={selectedOptionAway}
                onChange={this.handleChangeAway}
                options={this.state.teamsformatch}
              />
            </Col>
            <Col xs={12} sm={6}>
              {this.state.selectedOptionHome ? (
                <Matchpositions teamid={this.state.homeID} newdata = {this.getDataHome} />
              ) : (
                <p></p>
              )}
            </Col>

            <Col xs={12} sm={6}>
              {this.state.selectedOptionAway ? (
                <Matchpositions teamid={this.state.awayID} newdata = {this.getDataAway} />
              ) : (
                <p></p>
              )}

            </Col>
            <br/><br/><br/><br/><br/><br/><br/>

            <Col xs={12} sm={6}>
              <br/><br/>
              <p>
              <FormattedMessage
              id="MATCH.choseGameDate"
              defaultMessage="Choose game date"
              />
              </p>
              <hr/>
              <DayPicker
                onDayClick={this.handleDayClick}
                selectedDays={this.state.selectedDay}
                disabledDays={{ daysOfWeek: [0] }}
              />
            </Col>
              <Col xs={12} sm={6}>
              <br/><br/><br/><br/>

              <h3 className="greytext">
              <FormattedMessage
              id="MATCH.gameData"
              defaultMessage="GAMEDATA:"
              />
              </h3>
              {this.state.selectedOptionHome && this.state.selectedOptionAway ? (
                <p>{this.state.selectedOptionHome.label} VS {this.state.selectedOptionAway.label}</p> ):(
                <p>
                <FormattedMessage
                id="MATCH.selectMessage"
                defaultMessage="Select teams to see gamedata"
                />
                </p>)}

              {this.state.selectedDay ? (
                <p>
                <FormattedMessage
                id="MATCH.gameDate"
                defaultMessage="Gamedate:"
                />
                 {this.state.selectedDay.toLocaleDateString('en-GB')}</p>
              ) : (
                <p></p>
              )}


              <Button className="formbtnSave" color="primary" onClick={this.addMatch} >
              <FormattedMessage
              id="MATCH.saveResultButton"
              defaultMessage="Save results"
              />
              </Button>
              <Button className="formbtnDel" color="primary" onClick={this.delResult} >
              <FormattedMessage
              id="MATCH.deleteResultButton"
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
