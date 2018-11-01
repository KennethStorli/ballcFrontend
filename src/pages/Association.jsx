import React, { Component} from 'react';


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
          <h1>KMS</h1>
          <h1>{this.state.associations.name}</h1>
          {console.log(this.props.association)}

        </div>

          );
          }

          }
