import React, {Component} from 'react';
import Select from 'react-select';
import '../pages/Home.css';
import {Button } from 'mdbreact';
import {PostData} from '../PostData';



export default class Matchposition extends Component {

    constructor(props) {
      super(props);
      this.state = {
        players:[],
        goaltypes:[],
        selectedOption:'',
        teamID: this.props.teamid,
        test:'hahaha',
      };
      this.positions = [];
      console.log(props)

    }

    handleGoalkeeper = (selectedOption) => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
      var fullposition = {
        player: selectedOption,
        description: "Goalkeeper"
      };
      this.positions.push(fullposition);
    }

    handleDefence = (selectedOption) => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
      var fullposition = {
        player: selectedOption,
        description: "Defence"
      };
      this.positions.push(fullposition);
    }

    handleMidfield = (selectedOption) => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
      var fullposition = {
        player: selectedOption,
        description: "Midfield"
      };
      this.positions.push(fullposition);
    }

    handleforward = (selectedOption) => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
      var fullposition = {
        player: selectedOption,
        description: "Forward"
      };
      this.positions.push(fullposition);
    }


    componentDidMount(){
      fetch(`https://ballc-frontend-be.herokuapp.com/playersteam/${this.state.teamID}`)
      .then(result => result.json())
      .then(players => this.setState({players}))
    }

    addPosition = () =>{
      let user = Object.assign({}, this.state);    //creating copy of object

      this.props.newdata(this.positions);
      //PostData('positions', this.positions);
      return this.positions;
    }
    render() {
      const { selectedOption } = this.state.players;
      let players = this.state.players;
      let user = Object.assign({}, this.state.position);    //creating copy of object


      var goalkeeper = "goalkeeper";

    return (
      <div>
        <hr/>
        <div className="MatchPosList">
          <div className="newScore">
            <p>Select Goalkeeper</p>
            <Select
              name = {goalkeeper}
              value={selectedOption}
              onChange={this.handleGoalkeeper}
              options={players}
            />
            <hr/>
            <br/>
            <p>Select Defence</p>
            <Select
              name = "defence"
              value={selectedOption}
              onChange={this.handleDefence}
              options={players}
            />
            <p>Select Defence</p>
            <Select
              name = "defence"
              value={selectedOption}
              onChange={this.handleDefence}
              options={players}
            />  <p>Select Defence</p>
            <Select
              name = "defence"
              value={selectedOption}
              onChange={this.handleDefence}
              options={players}
            />  <p>Select Defence</p>
            <Select
              name = "defence"
              value={selectedOption}
              onChange={this.handleDefence}
              options={players}
            />
            <hr/>
            <br/>
            <p>Select Midfield</p>
            <Select
              name = "midfield"
              value={selectedOption}
              onChange={this.handleMidfield}
              options={players}
            />
            <p>Select Midfield</p>
            <Select
              name = "midfield"
              value={selectedOption}
              onChange={this.handleMidfield}
              options={players}
            />
            <p>Select Midfield</p>
            <Select
              name = "midfield"
              value={selectedOption}
              onChange={this.handleMidfield}
              options={players}
            />
            <p>Select Midfield</p>
            <Select
              name = "midfield"
              value={selectedOption}
              onChange={this.handleMidfield}
              options={players}
            />
            <hr/>
            <br/>
            <p>Select Forward</p>
            <Select
              name = "forward"
              value={selectedOption}
              onChange={this.handleforward}
              options={players}
            />
            <p>Select Forward</p>
            <Select
              name = "forward"
              value={selectedOption}
              onChange={this.handleforward}
              options={players}
            />
              <Button className="formbtnSave" color="primary" onClick={this.addPosition} >Save results</Button>
            
          </div>
        </div>
      </div>
    );
  }
}
