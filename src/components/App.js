import React, {Component} from 'react';
import "./App.scss"
import Form from "./Form";
import Pokemon from "./Pokemon";

class App extends Component {

  render() {
    return (
      <>
        <h1>Pokédex</h1>
        <Form />
        <main>
          <Pokemon />
        </main>
      </>
    );
  }
}

export default App;
