import React, {Component} from 'react';
import Select from 'react-select';
import '../pages/Home.css'


export default class Match extends Component {

    constructor(props) {
      super(props);
      this.state = {
        players:[],
        selectedOption: null,

      };

    }


    componentDidMount() {
      fetch(`https://ballc-frontend-be.herokuapp.com/playersformatch`)
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
        <div className="newScore">
          <p>Select player</p>
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={players}
          />
          <br/>
          <br/>
          <p>Select goaltype</p>

          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={players}
          />
        </div>
      </div>
    );
  }
}
