import React, {Component} from 'react';
import './Error.scss';

class Error extends Component {

  handleClose = e => {
    this.props.handleAtParent()
  };

  render() {
    return (
      <>
        <section className="container">
          <div className="row row--error">
            <div className={this.props.errorText ? "col-11 error error--alt" : "col-11 error"}>
              <h3>{this.props.errorText ? this.props.errorText : "No Pokémon Matched Your Search!"}</h3>
              {this.props.errorText ? null :
                <>
                  <p>Look out for typos.</p>
                  <p>Maybe use Pokédex number.</p>
                </>
              }
              <div className="material-icons" onClick={e => this.handleClose(e)}>
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