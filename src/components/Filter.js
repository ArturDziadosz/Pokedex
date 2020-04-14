import React, {Component} from 'react';
import './Filter.scss';

import {Button} from "@material-ui/core";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: this.props
    }
  }


  handleChangeFilter = e => {
    let id = e.currentTarget.id;
    this.props.handleAtParent(id);
  };

  render() {
    const {activeFilter} = this.state;

    return (
      <>
        <section className="container">
          <div className="row row--filter">
            <Button className="col-2" onClick={e => this.handleChangeFilter(e)} id={"az"} style={activeFilter.azFilter ? {backgroundColor: "black"} : null}>
              <i className="fas fa-sort-alpha-down" />
            </Button>
            <Button className="col-2" onClick={e => this.handleChangeFilter(e)} id={"za"} style={activeFilter.zaFilter ? {backgroundColor: "black"} : null}>
              <i className="fas fa-sort-alpha-down-alt" />
            </Button>
            <Button className="col-2" onClick={e => this.handleChangeFilter(e)} id={"19"} style={activeFilter.ascendFilter ? {backgroundColor: "black"} : null}>
              <i className="fas fa-sort-numeric-down" />
            </Button>
            <Button className="col-2" onClick={e => this.handleChangeFilter(e)} id={"91"} style={activeFilter.descendFilter ? {backgroundColor: "black"} : null}>
              <i className="fas fa-sort-numeric-down-alt" />
            </Button>
          </div>
        </section>
      </>
    );
  }
}

export default Filter;