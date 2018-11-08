import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Next from './pages/Next';
import Teams from './pages/Teams';
import User from './pages/User';
import Admin from './pages/Admin';
import Person from './pages/Person';
import Team from './pages/Team';
import Association from './pages/Association';
import Teaminfo from './pages/Teaminfo';
import Roles from './pages/Roles';
import Address from './pages/Address';
import Locations from './pages/CRUDLocation';
import Associations from './pages/CRUDAssociation';
import NewSeason from './pages/NewSeason';
import EditSeason from './pages/EditSeason';
import Match from './pages/Match';
import Result from './pages/Result';
<<<<<<< Updated upstream
import Goaltypes from './pages/Goaltypes'
import Profile from './pages/Profile'

=======
import axios from 'axios';
>>>>>>> Stashed changes







/*import Seasons from './pages/Seasons';
import Season1 from './pages/Season1';
import Season2 from './pages/Season2';
import Season3 from './pages/Season3';
<Route path="/Seasons" component={Seasons}></Route>
<Route path="/Season1" component={Season1}></Route>
<Route path="/Season2" component={Season2}></Route>
<Route path="/Season3" component={Season3}></Route>
*/

import Navbar from './components/Navigator'
import NavigatorAdm from './components/NavigatorAdm'



class App extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     show: false,
  //     users:[],
  //   }
    
  //   var username= null;

  // }

  // componentDidMount() {
  //   fetch(`http://localhost:8080/checkadmin`)
  //   .then(result => result.json())
  //   .then(users => this.setState({users}))

  // }

  constructor(props) {
    super(props);
    this.state = {
      show: false,
     users:'',
    };
  }


  showUser(){
    /*
    var user = null;
    axios.get('http://localhost:8080/checkadmin')
    .then(response => {
      this.setState({users: response.data})
    })
    return(
      
    )
    */
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <NavigatorAdm/>
{this.showUser()}
    {console.log(this.state.users)}

          <Route exact path="/" component={Home}></Route>
          <Route path="/next" component={Next}></Route>
          <Route path="/Teams" component={Teams}></Route>
          <Route path="/User" component={User}></Route>
          <Route path="/Profile" component={Profile}></Route>
          <Route path="/Admin" component={Admin}></Route>
          <Route path="/Person" component={Person}></Route>
          <Route path="/Team" component={Team}></Route>
          <Route path="/Association" component={Association}></Route>
          <Route path="/Teaminfo" component={Teaminfo}></Route>
          <Route path="/Roles" component={Roles}></Route>
          <Route path="/Address" component={Address}></Route>
          <Route path="/Locations" component={Locations}></Route>
          <Route path="/Associations" component={Associations}></Route>
          <Route path="/NewSeason" component={NewSeason}></Route>
          <Route path="/EditSeason" component={EditSeason}></Route>
          <Route path="/Match" component={Match}></Route>
          <Route path="/Result" component={Result}></Route>
          <Route path="/Goaltypes" component={Goaltypes}></Route>








        </div>
      </Router>
    );
  }
}

export default App;
