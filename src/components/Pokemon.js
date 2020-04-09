import React, {Component} from 'react';
import './Pokemon.scss';

class Pokemon extends Component {

  render() {
    return (
      <>
        <section className="container">
          <div className="row">
            <div className="col-11 pokemon">
              <div className="pokemon__img" />
              <div className="pokemon__description">
                <p>#001</p>
                <p>Bulbasaur</p>
                <p>Grass</p>
              </div>
            </div>
            <div className="col-11 pokemon">
              <div className="pokemon__img" />
              <div className="pokemon__description">
                <p>#002</p>
                <p>Ivysaur</p>
                <p>Grass</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Pokemon;