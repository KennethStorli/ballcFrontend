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
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <NavigatorAdm/>

          <Route exact path="/" component={Home}></Route>
          <Route path="/next" component={Next}></Route>
          <Route path="/Teams" component={Teams}></Route>
          <Route path="/User" component={User}></Route>
          <Route path="/Admin" component={Admin}></Route>
          <Route path="/Person" component={Person}></Route>
          <Route path="/Team" component={Team}></Route>
          <Route path="/Association" component={Association}></Route>
          <Route path="/Teaminfo" component={Teaminfo}></Route>


        </div>
      </Router>
    );
  }
}

export default App;
