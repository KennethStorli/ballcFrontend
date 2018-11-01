import React, { Component} from 'react';
import Association from './Association'

export default class Teaminfo extends Component{
    constructor(props) {
      super(props);
      this.state = {
        team:[],
        associations:[],
        locations:[],
        coaches: [],
        owners: [],
        players: [],
        owner: '',
        association:'',

        teamID: props.location.state.id,
      };
      console.log('Teams is:', this.state.teamID)


    }
    componentDidMount() {
      fetch(`https://ballc-frontend-be.herokuapp.com/team/${this.state.teamID}`)
      .then(result => result.json())
      .then(team => this.setState({team,
          association: team.association}))
    }


    render() {


      return (
        <div>
          <h1>{this.state.team.teamName}</h1>
          <Association association={this.state.team.association}/>
          {console.log(this.state.team.association)}
          <h1>{this.state.association}</h1>

        </div>

      );
    }

  }
