import React, { Component} from 'react';
import Personrole from './Personrole'

export default class Owner extends Component{
  constructor(props) {
    super(props);
    this.state = {
      owners:[],
      owner: this.props.owner,
    };

  }
  componentWillReceiveProps(nextprop) {
    fetch(`https://ballc-frontend-be.herokuapp.com/owner/${nextprop.owner}`)
    .then(result => result.json())
    .then(owners => this.setState({owners}))
  }

    render() {


      return (
        <div>
          <Personrole person={this.state.owners.person_id}/>
          <h1>{this.state.owners.owner_id}</h1>
          {console.log(this.state.owner)}
        </div>

      );
    }

}
