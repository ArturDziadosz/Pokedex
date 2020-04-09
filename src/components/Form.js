import React, {Component} from 'react';
import './Form.scss';

import {TextField, Button} from '@material-ui/core';

class Form extends Component {

  render() {
    return (
      <>
        <section className="container">
          <form className={"row"}>
            <TextField className={"col-10"} variant={"outlined"} color={"primary"} autoFocus={true} label={"Pokémon name"}
                       type={"search"}
                       size={"big"}/>
            <Button className={"col-2"} variant={"contained"} color={"primary"}>
              <span className="material-icons">
                search
              </span>
            </Button>
          </form>
        </section>
      </>
    );
  }
}

export default Form;