import React, {Component} from 'react';
import Select from 'react-select';
import '../pages/Home.css';
import {Button } from 'mdbreact';


export default class Match extends Component {

    constructor(props) {
      super(props);
      this.state = {
        players:props.players,
        goaltypes:props.goaltypes,
        selectedPlayer: props.selectedPlayer,
        selectedGoal: props.selectedGoal,

      };

      this.handleChangePlayer = props.handleChangePlayer;
      this.handleChangeGoal = props.handleChangeGoal;
      this.selectgoal = props.selectgoal;
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
