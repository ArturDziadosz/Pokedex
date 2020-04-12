import React, {Component} from 'react';
import './Error.scss';

class Error extends Component {

  render() {
    return (
      <>
          <section className="container">
            <div className="row">
              <div className="col-11 error">
                <h3>No Pokémon Matched Your Search!</h3>
                <p>Look out for typos.</p>
                <p>Maybe use Pokédex number.</p>
              </div>
            </div>
          </section>
      </>
    );
  }
}

export default Error;