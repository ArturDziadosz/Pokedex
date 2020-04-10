import React, {Component} from 'react';
import "./App.scss"
import Form from "./Form";
import Pokemon from "./Pokemon";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      api: "https://pokeapi.co/api/v2/",
      data: false
    }
  }

  fetchData = (inputValue) => {
    this.setState({
      inputValue
    }, () => {
      fetch(`${this.state.api}pokemon/${this.state.inputValue}`).then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Connection problem");
        }
      }).then(data => {
        this.setState({
          data
        });
      }).catch(err => console.log(err));
    });
  };

  render() {
    return (
      <>
        <h1>Pokédex</h1>
        <Form handleAtParent={this.fetchData}/>
        <main>
          <Pokemon pokemonData={this.state.data}/>
        </main>
      </>
    );
  }
}

export default App;
