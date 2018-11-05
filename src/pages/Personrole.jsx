import React, { Component} from 'react';


export default class Owner extends Component{
  constructor(props) {
    super(props);
    this.state = {
      persons:[],
      person: this.props.person,
    };

  }
  componentWillReceiveProps(nextprop) {
    fetch(`https://ballc-frontend-be.herokuapp.com/owner/${nextprop.person}`)
    .then(result => result.json())
    .then(owners => this.setState({owners}))
  }

    render() {


      return (
        <div>
          <h1>{this.state.persons.first_name} {this.state.persons.last_name}</h1>
        </div>

      );
    }

}
