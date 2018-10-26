import React, { Component } from 'react';

export default class Search extends Component{
  render(){
    return(
      <form>
        <input type="text"
          placeholder="Type to filter.."
        />
      </form>

    )
  }
}
