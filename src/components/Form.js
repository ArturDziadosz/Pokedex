import React, {Component} from 'react';
import './Form.scss';

import {TextField, Button} from '@material-ui/core';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputValue === "") {
      return null
    }
    this.props.handleAtParent(this.state.inputValue.toLocaleLowerCase().trim());
    this.setState({
      inputValue: "",
    })
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  render() {
    return (
      <>
        <header className="container">
          <form className={"row"} onSubmit={this.handleSubmit}>
            <TextField className={"col-9"} variant={"outlined"} autoFocus={true}
                       label={"Pokémon name or number"}
                       type={"search"}
                       name={"inputValue"}
                       onChange={this.handleChange}
                       value={this.state.inputValue}
            />
            <Button className={"col-2"} variant={"contained"} color={"primary"} type={"submit"}>
              <span className="material-icons">
                search
              </span>
            </Button>
          </form>
        </header>
      </>
    );
  }
}

export default Form;