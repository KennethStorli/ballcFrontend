import React, { Component} from 'react';


export default class Owner extends Component{
    constructor(props) {
      super(props);
      this.state = {
        owners:[],
        owner: this.props.owner,
      };
      console.log(this.props)


    }
    componentDidMount() {
      fetch(`https://ballc-frontend-be.herokuapp.com/owner/${this.state.owner}`)
      .then(result => result.json())
      .then(owners => this.setState({owners}))
    }

    render() {


      return (
        <div>
          <h1>{this.state.owners.}

          </div>

          );
          }

          }
