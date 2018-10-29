import React from 'react';
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Search from './Search'
import './Personlist.css'
import './Teamlist.css'

export default class Personlist extends React.Component  {
//REMEBER TO PUT A <ROW> INFRONT OF THE CALL, PLS



/*filter(name => {
  return name.first_name.indexOf(this.filterText) >= 0
})*/

componentDidMount() {
  fetch(`http://ballc-backend-api.herokuapp.com/persons`)
  .then(result => result.json())
  .then(persons => this.setState({persons}))
}

editplayer(){
  console.log('Youre editing a person')
}


  render() {
    let filteredNames = this.state.persons.filter(
      (name) => {
        return name.first_name.indexOf(this.state.filterText) !== -1 || name.last_name.indexOf(this.state.filterText) !== -1
      }
    )



    return(
          <Col xs={12} sm={6}>
            <p className="h5 text-center mb-4">REGISTERED PEOPLE</p>
            <br/>
            <div className="Teamlist">
              <ListGroup>
                <div>
                  {filteredNames.map(name =>
                    <ListGroupItem className="listingplayer" onClick={this.editplayer} key={name.person_id}>{name.first_name} {name.last_name} </ListGroupItem>)}
                </div>
              </ListGroup>
              </div>
              <br/>
              <Search
                filterText={this.state.filterText}
                filterUpdate={this.filterUpdate.bind(this)}
              />


            </Col>

    );
  }
};
