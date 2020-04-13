import React, {Component} from 'react';
import './Filter.scss';

import {Button} from "@material-ui/core";

class Filter extends Component {

  handleChangeFilter = e => {
    let id = e.currentTarget.id;
    this.props.handleAtParent(id);
  };

  render() {
    const activeFilter = this.props.activeFilter;

    return (
      <>
        <section className="container">
          <div className="row row--filter">
            <Button className="col-2" onClick={this.handleChangeFilter} id={"az"} style={activeFilter.azFilter ? {backgroundColor: "black"} : null}>
              <i className="fas fa-sort-alpha-down" />
            </Button>
            <Button className="col-2" onClick={this.handleChangeFilter} id={"za"} style={activeFilter.zaFilter ? {backgroundColor: "black"} : null}>
              <i className="fas fa-sort-alpha-down-alt" />
            </Button>
            <Button className="col-2" onClick={this.handleChangeFilter} id={"19"} style={activeFilter.ascentFilter ? {backgroundColor: "black"} : null}>
              <i className="fas fa-sort-numeric-down" />
            </Button>
            <Button className="col-2" onClick={this.handleChangeFilter} id={"91"} style={activeFilter.descentFilter ? {backgroundColor: "black"} : null}>
              <i className="fas fa-sort-numeric-down-alt" />
            </Button>
          </div>
        </section>
      </>
    );
  }
}

export default Filter;