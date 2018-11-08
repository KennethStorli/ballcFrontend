import React, {Component} from 'react';
import Select from 'react-select';
import {Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import { Input } from 'mdbreact'
import Goal from '../components/Goal'
import Result from './Result'
import {Button } from 'mdbreact'
import DayPicker from 'react-day-picker';
import Matchpositions from '../components/Matchpositions'
import {PostData} from '../PostData';


export default class Match extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamsformatch:[],
      seasons:[],
      homeID:'',
      awayID:'',
      selectedOptionHome:'',
      selectedOptionAway: '',
      selectedOptionSeason:'',
      selectedDay:undefined,
      selectedDayString:'',

    };
  this.handleDayClick = this.handleDayClick.bind(this);
  }
  createGoalHome = () => {
  let homescore = this.state.homescore
  let i = 0

  for (i = 0; i < this.state.homescore.value; i++){
    return(<Goal/>)
  }
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

    fetch(`https://ballc-frontend-be.herokuapp.com/seasons`)
    .then(result => result.json())
    .then(seasons => this.setState({seasons}))
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

  addMatch = () =>{
    let user = Object.assign({}, this.state);    //creating copy of object

    var data = {
      start_date: user.selectedDayStartString,
      end_date: user.selectedDayEndString,
      name: user.seasonName,
      description: user.seasonDescription
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
              <p>SEASON</p>
              <Select
                value={selectedOptionSeason}
                onChange={this.handleChangeSeason}
                options={this.state.seasons}
              />
            </Col>
            <br/><br/><br/>
            <Col xs={12} sm={6}>
              <p>HOME TEAM</p>
              <Select
                value={selectedOptionHome}
                onChange={this.handleChangeHome}
                options={this.state.teamsformatch}
              />
            </Col>
            <Col xs={12} sm={6}>
              <p>AWAY TEAM</p>

              <Select
                value={selectedOptionAway}
                onChange={this.handleChangeAway}
                options={this.state.teamsformatch}
              />
            </Col>
            <Col xs={12} sm={6}>
              {this.state.selectedOptionHome ? (
                <Matchpositions teamid={this.state.homeID}/>
              ) : (
                <p></p>
              )}
            </Col>

            <Col xs={12} sm={6}>
              {this.state.selectedOptionAway ? (
                <Matchpositions teamid={this.state.awayID}/>
              ) : (
                <p></p>
              )}

            </Col>
            <br/><br/><br/><br/><br/><br/><br/>

            <Col xs={12} sm={6}>
              <br/><br/>
              <p>Choose game date</p>
              <hr/>
              <DayPicker
                onDayClick={this.handleDayClick}
                selectedDays={this.state.selectedDay}
                disabledDays={{ daysOfWeek: [0] }}
              />
            </Col>
              <Col xs={12} sm={6}>
              <br/><br/><br/><br/>

              <h3 className="greytext">GAMEDATA:</h3>
              {this.state.selectedOptionHome && this.state.selectedOptionAway ? (
                <p>{this.state.selectedOptionHome.label} VS {this.state.selectedOptionAway.label}</p> ):(<p>Select teams to see gamedata</p>)}

              {this.state.selectedDay ? (
                <p>Gamedate: {this.state.selectedDay.toLocaleDateString('en-GB')}</p>
              ) : (
                <p></p>
              )}

              <Button className="formbtnSave" color="primary" onClick={this.addMatch} >Save results</Button>
              <Button className="formbtnDel" color="primary" onClick={this.delResult} >Delete results</Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
