import React, {Component} from 'react';
import './Error.scss';

class Error extends Component {

  handleClose = () => {
    this.props.handleAtParent()
  };

  render() {
    return (
      <>
          <section className="container">
            <div className="row row--error">
              <div className="col-11 error">
                <h3>No Pokémon Matched Your Search!</h3>
                <p>Look out for typos.</p>
                <p>Maybe use Pokédex number.</p>
                <div className="material-icons" onClick={this.handleClose}>
                  keyboard_return
                </div>
              </div>
            </div>
          </section>
      </>
    );
  }
}

export default Error;