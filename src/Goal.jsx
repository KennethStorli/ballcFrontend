import React, {Component} from 'react';
import Select from 'react-select';


export default class Match extends Component {



    return (

            <div className="newScore">
              <p>Select player</p>
              <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={players}
              />
              <br/>
              <br/>
              <p>Select goaltype</p>

              <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={players}
              />
            </div>

    );
  }
}
