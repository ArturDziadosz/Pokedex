import React, {Component} from 'react';
import './More.scss';

import {Button} from "@material-ui/core";

class More extends Component {

  handleUploadNewPokemon = () => {
    this.props.handleAtParent(this.props.nextUrl)
  };

  render() {

    return (
      <>
        <section className="container">
          <div className="row row--more">
            <Button className={"moreBtn"} onClick={this.handleUploadNewPokemon}>
                <span className="material-icons">
                  expand_more
                </span>
            </Button>
          </div>
        </section>
      </>
    );
  }
}

export default More;