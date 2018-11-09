import React, {Component} from 'react';
import Select from 'react-select';
import '../pages/Home.css'


export default class Matchposition extends Component {

    constructor(props) {
      super(props);
      this.state = {
        players:[],
        goaltypes:[],
        selectedOption: null,
        teamID: this.props.teamid,
      };
      console.log(props)

    }



    componentDidMount(){
      fetch(`https://ballc-frontend-be.herokuapp.com/playersteam/${this.state.teamID}`)
      .then(result => result.json())
      .then(players => this.setState({players}))
    }

    handleChange = (selectedOption) => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
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
          </div>
        </div>
      </div>
    );
  }
}
