import React, { Component} from 'react';
import './Teaminfo.css'

export default class Association extends Component{
    constructor(props) {
      super(props);
      this.state = {
        associations:[],
        association: this.props.association,
      };

    }
    componentWillReceiveProps(nextprop) {
      fetch(`https://ballc-frontend-be.herokuapp.com/association/${nextprop.association}`)
      .then(result => result.json())
      .then(associations => this.setState({associations}))
    }

    render() {


      return (
        <div>
          <p className="ass_name">{this.state.associations.name}</p>
          <p className="ass_description">{this.state.associations.description}</p>
        </div>

      );
    }
  }
