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
        test:'hahaha'
      };
      this.positions = [];
      console.log(props)

    }

    handleChange = (selectedOption) => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
      this.positions.push(selectedOption);
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
      let players = this.state.players

    return (
      <div>
        <hr/>
        <div className="MatchPosList">
          <div className="newScore">
            <p>Select Goalkeeper</p>
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={players}
            />
            <hr/>
            <br/>
            <p>Select Defence</p>
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={players}
            />
            <p>Select Defence</p>
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={players}
            />  <p>Select Defence</p>
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={players}
            />  <p>Select Defence</p>
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={players}
            />
            <hr/>
            <br/>
            <p>Select Midfield</p>
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={players}
            />
            <p>Select Midfield</p>
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={players}
            />
            <p>Select Midfield</p>
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={players}
            />
            <p>Select Midfield</p>
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={players}
            />
            <hr/>
            <br/>
            <p>Select Forward</p>
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={players}
            />
            <p>Select Forward</p>
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={players}
            />
              <Button className="formbtnSave" color="primary" onClick={this.addPosition} >Save results</Button>
            
          </div>
        </div>
      </div>
    );
  }
}
