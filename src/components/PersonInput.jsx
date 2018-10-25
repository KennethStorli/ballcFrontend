import React from 'react';
import axios from 'axios';

export default class PersonInput extends React.Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({name: event.target.value});
  }

  handleSumbit = event => {
    event.preventDefault();
    const user = {
      name: this.state.name
    };

    axios.post('https://ea-case-ballc.herokuapp.com/test', { user })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  };

  render(){
    return(
      <form onSubmit={this.handleSumbit}>
        <label>
          Person Name:
          <input type="text" name="name" onChange={this.handleChange}></input>
        </label>
        <button type="submit">Add</button>
      </form>
    )
  }
}
