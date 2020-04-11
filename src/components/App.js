import React, {Component} from 'react';
import "./App.scss"
import Form from "./Form";
import Pokemon from "./Pokemon";
import Error from "./Error";
import PokemonDetails from "./PokemonDetails";

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
        {(!this.state.data && !this.state.noMatchFound) ?
          <main>
            <section className="container">
              <div className="row">
                <div className="col-11 start">
                  <h2>Search for a Pokémon by name or using its National Pokédex number.</h2>
                  <p>Have fun!</p>
                </div>
              </div>
            </section>
          </main> :
          this.state.boxWithDetails ?
          <main><PokemonDetails pokemonData={this.state.data} pokemonDetails={this.state.pokemonDetails} pokemonEvolution={this.state.evolutionChainDetails}/></main> :
          <main>
            {this.state.noMatchFound ? <Error/> :
              <Pokemon pokemonData={this.state.data} handleAtParent={this.getEvolutionUrl}/>
            }
          </main>
        }
        <footer> Designed by Artur Dziadosz. Based on <a href={"https://pokeapi.co/"} target={"_blank"}>PokeApi.</a></footer>
      </>
    );
  }
}

export default App;
