import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class App extends Component {

  render() {
    return (
      <>
        <div className={"container"}>
          <div className="row">
            Pokedex
          </div>
          <span className="material-icons" style={{color: "red"}}>
        accessibility
        </span>


        </div>
        <Button variant="contained" color="primary" startIcon={<span className="material-icons">search</span>}>
          Search for Pokemon
        </Button>
      </>
    );
  }
}

export default App;
