import React, {Component} from 'react';
import "./App.scss"
import Form from "./Form";
import Pokemon from "./Pokemon";
import Error from "./Error";
import {colors} from "@material-ui/core";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      api: "https://pokeapi.co/api/v2/",
      data: false,
      noMatchFound: false,
      boxWithDetails: false,
      pokemonDetails: "",
      evolutionChainDetails: ""
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
          throw new Error("Connection problem (primal fetch)");
        }
      }).then(data => {
        this.setState({
          data,
          noMatchFound: false,
          boxWithDetails: false
        });
      }).catch(err => {
        this.setState({
          noMatchFound:true,
          boxWithDetails: false,
        });
        console.log(err)
      });
    });
  };

  getEvolutionUrl = (speciesURL) =>{
    fetch(speciesURL).then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Connection problem (Evolution URL)");
      }
    }).then(data => {
      this.renderChain(data.evolution_chain.url);
      this.setState({
        pokemonDetails: data
      }, () => {
        this.setState({
          boxWithDetails: true
        })
      });
    }).catch(err => {
      console.log(err)
    });
  };

  renderChain = (chainURL) => {
    fetch(chainURL).then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Connection problem (Render Chain)");
      }
    }).then(data => {
      this.setState({
        evolutionChainDetails: data
      })
    }).catch(err => {
      console.log(err);
    })
  };

  render() {
    return (
      <>
        <h1>Pokédex</h1>
        <Form handleAtParent={this.fetchData}/>
        {this.state.boxWithDetails ?
          <main>Box {this.state.pokemonDetails.base_happiness}</main> :
          <main>
            {this.state.noMatchFound ? <Error/> :
              <Pokemon pokemonData={this.state.data} handleAtParent={this.getEvolutionUrl}/>
            }
          </main>
        }
        <footer> Designed by Artur Dziadosz. Based on PokeApi.</footer>
      </>
    );
  }
}

export default App;
