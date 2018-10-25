import React from 'react';
import axios from 'axios';

export default class Personlist extends React.Component {
  state = {
    persons: []
  }

  componentDidMount(){
    axios.get('https://ea-case-ballc.herokuapp.com/test')
    .then(res=> {
      console.log(res);
      this.setState({ persons: res.data});
    })
  }
  render(){
    return(
      <ul>
        {this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
      </ul>
    )
  }
}
