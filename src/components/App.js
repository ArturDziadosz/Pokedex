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
      pokemonData: [],
      data: false,
      noMatchFound: false,
      boxWithDetails: false,
      pokemonDetails: "",
      evolutionChainDetails: ""
    }
  }

  componentDidMount() {
    this.fetchAllPokemon(20, 0);
  }

  fetchAllPokemon = (limit, offset) => {
    fetch(`${this.state.api}pokemon/?offset=${offset}&limit=${limit}`).then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Connection problem (primal fetch)");
      }
    }).then(allPokemon => {
      allPokemon.results.forEach(pokemon => {
        this.fetchAllPokemonData(pokemon)
      });
    }).catch(err => {
      console.log(err);
    })
  };

  fetchAllPokemonData = (pokemon) => {
    fetch(pokemon.url).then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Connection problem (primal fetch)");
      }
    }).then(pokemonData => {
      const pokemonDataTable = [...this.state.pokemonData];
      pokemonDataTable.push(pokemonData);
      this.setState({
        pokemonData: pokemonDataTable
      })
    }).catch(err => {
      console.log(err);
    })
  };

  fetchData = (inputValue, boolean) => {
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
          boxWithDetails: boolean
        });
      }).catch(err => {
        this.setState({
          noMatchFound: true,
          boxWithDetails: false,
        });
        console.log(err)
      });
    });
  };

  getEvolutionUrl = (speciesURL, id) => {
    this.fetchData(id, true);
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

  closeWindow = () => {
    this.setState({
      boxWithDetails: false,
      data: false
    })
  };

  render() {
    this.state.pokemonData.sort((a,b) => {
      return a.id - b.id;
    });

    let main;
    if (!this.state.data && !this.state.boxWithDetails) {
      main = <main>
        <section className="container">
          <div className="row">
            <div className="col-11 start">
              <h2>Search for a Pokémon by name or using its National Pokédex number (1-943).</h2>
              <p>Have fun!</p>
            </div>
          </div>
        </section>
        {this.state.noMatchFound ? <Error/> :
          this.state.pokemonData.map(pokemon => {
            return <Pokemon pokemonData={pokemon} handleAtParent={this.getEvolutionUrl} key={pokemon.id}
                            id={pokemon.id}/>
          })}
      </main>;
    }

    if (this.state.data && !this.state.boxWithDetails) {
      main = <main>
        {this.state.noMatchFound ? <Error/> :
          <Pokemon pokemonData={this.state.data} handleAtParent={this.getEvolutionUrl} id={this.state.data.id}/>
        }
      </main>;
    }

    if (this.state.data && this.state.boxWithDetails) {
      main = <main>
        <PokemonDetails pokemonData={this.state.data} pokemonDetails={this.state.pokemonDetails}
                        pokemonEvolution={this.state.evolutionChainDetails} handleAtParent={this.closeWindow}/>
      </main>;
    }

    return (
      <>
        <h1>Pokédex</h1>
        <Form handleAtParent={this.fetchData}/>
        {main}
        <footer> Designed by Artur Dziadosz. Based on <a href={"https://pokeapi.co/"} target={"_blank"}>PokeApi.</a>
        </footer>
      </>
    );
  }
}

export default App;
