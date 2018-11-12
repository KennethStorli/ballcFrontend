import React, {Component} from 'react';
import Select from 'react-select';
import '../pages/Home.css';
import {Button } from 'mdbreact';


export default class Match extends Component {

    constructor(props) {
      super(props);
      this.state = {
        players:[],
        goaltypes:[],
        selectedPlayer:'',
        selectedGoal:'',
        teamID: props.team,
      };

      this.player ='';
      this.goal = '';
      this.selectgoal = this.selectgoal.bind(this);  
      this.handleChangePlayer = this.handleChangePlayer.bind(this);
      this.handleChangeGoal = this.handleChangeGoal.bind(this);
    }


    componentDidMount(){
      fetch(`https://ballc-frontend-be.herokuapp.com/playersteam/${this.state.teamID}`)
      .then(result => result.json())
      .then(players => this.setState({players}))
  
      fetch(`https://ballc-frontend-be.herokuapp.com/goaltypeformatch`)
      .then(result => result.json())
      .then(goaltypes => this.setState({goaltypes}))
    }

    handleChangePlayer = (selectedPlayer) => {

      this.player = selectedPlayer;
      console.log(`Option selected:`, this.player);  

    }

    handleChangeGoal = (selectedGoal) =>{
      this.goal = selectedGoal;
      console.log(`Option selected:`, this.goal);
    }

    selectgoal(){

      //console.log(this.goals);
      var fullgoal = {
        player: this.player,
        goal: this.goal
      }
      this.props.newData(fullgoal);
      //PostData('positions', this.positions);
    }


    render(props) {

      const { selectedPlayer } = this.state.players;
      const { selectedGoal } = this.state.goaltypes;
  
      let players = this.state.players
      let goaltypes = this.state.goaltypes
  

    return (
      <div>
        <hr/>

        <div className="newScore">
          <p>Select player</p>
          <Select
            value={selectedPlayer}
            onChange={this.handleChangePlayer}
            options={players}
          />
          <br/>
          <p>Select goaltype</p>

          <Select
            value={selectedGoal}
            onChange={this.handleChangeGoal}
            options={goaltypes}
          />

          <Button className="formbtnSave" color="primary" onClick={this.selectgoal} >Save results</Button>

        </div>
      </div>
    );
  }
}
