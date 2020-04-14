import React, {Component} from 'react';
import './More.scss';

import {Button} from "@material-ui/core";

class More extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextUrl: this.props.nextUrl
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.nextUrl !== this.props.nextUrl) {
      this.setState({
        nextUrl: this.props.nextUrl
      })
    }
  }

  handleUploadNewPokemon = e => {
    this.props.handleAtParent(this.state.nextUrl)
  };

  render() {
    return (
      <>
        <section className="container">
          <div className="row row--more">
            <Button className={"moreBtn"} onClick={e => this.handleUploadNewPokemon(e)}>
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