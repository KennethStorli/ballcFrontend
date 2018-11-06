import React, {Component} from 'react';
import Select from 'react-select';
import {Grid} from 'react-bootstrap'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

export default class Match extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players:[],
      selectedOption: null,

    };

  }


  componentDidMount() {
    fetch(`http://ballc-frontend-be.herokuapp.com/players`)
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
      <Grid>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={players}
        />
      </Grid>
    );
  }
}
