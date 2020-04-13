import React, {Component} from 'react';
import "./App.scss"
import Form from "./Form";
import Pokemon from "./Pokemon";
import Error from "./Error";
import PokemonDetails from "./PokemonDetails";
import Filter from "./Filter";
import More from "./More"

import {Button} from "@material-ui/core";

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
      evolutionChainDetails: "",
      nextPokemon: "",
      filter: {
        azFilter: false,
        zaFilter: false,
        ascentFilter: true,
        descentFilter: false
      }
    }
  }

  componentDidMount() {
    this.fetchAllPokemon(`${this.state.api}pokemon/`);
  }

  fetchAllPokemon = (url) => {
    fetch(url).then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Connection problem (primal fetch)");
      }
    }).then(allPokemon => {
      this.setState({
        nextPokemon: allPokemon.next
      });
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
      data: false,
      noMatchFound: false
    })
  };

  changeFilter = id => {
    switch (id) {
      case 'az':
        this.setState({
          filter: {
            azFilter: true,
            zaFilter: false,
            ascentFilter: false,
            descentFilter: false
          }
        });
        break;
      case 'za':
        this.setState({
          filter: {
            azFilter: false,
            zaFilter: true,
            ascentFilter: false,
            descentFilter: false
          }
        });
        break;
      case '91':
        this.setState({
          filter: {
            azFilter: false,
            zaFilter: false,
            ascentFilter: false,
            descentFilter: true
          }
        });
        break;
      default:
        this.setState({
          filter: {
            azFilter: false,
            zaFilter: false,
            ascentFilter: true,
            descentFilter: false
          }
        });
    }
  };

  render() {
    const filter = this.state.filter;

    if (filter.ascentFilter) {
      this.state.pokemonData.sort((a, b) => {
        return a.id - b.id;
      });
    }

    if (filter.descentFilter) {
      this.state.pokemonData.sort((a, b) => {
        return b.id - a.id;
      });
    }

    if (filter.azFilter) {
      this.state.pokemonData.sort((a, b) => {
        const nameA = a.name;
        const nameB = b.name;
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }

    if (filter.zaFilter) {
      this.state.pokemonData.sort((a, b) => {
        const nameA = a.name;
        const nameB = b.name;
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
    }


    let main;
    if (!this.state.data && !this.state.boxWithDetails) {
      main =
        <main>
          {this.state.noMatchFound ?
            <Error handleAtParent={this.closeWindow}/> :
            null
          }
          <section className="container">
            <div className="row">
              <div className="col-11 start">
                <h2>Search for a Pokémon by name or using its National Pokédex number (1-802).</h2>
                <p>Have fun!</p>
              </div>
            </div>
          </section>
          {this.state.noMatchFound ? null :
            <>
              <Filter activeFilter={this.state.filter} handleAtParent={this.changeFilter}/>
              {this.state.pokemonData.map(pokemon => {
                return <Pokemon pokemonData={pokemon} handleAtParent={this.getEvolutionUrl} key={pokemon.id}
                                id={pokemon.id}/>
              })}
              <More nextUrl={this.state.nextPokemon} handleAtParent={this.fetchAllPokemon}/>
            </>
          }
        </main>;
    }

    if (this.state.data && !this.state.boxWithDetails) {
      main = <main>
        {this.state.noMatchFound ?
          <>
            <Error handleAtParent={this.closeWindow}/>
            <section className="container">
              <div className="row">
                <div className="col-11 start">
                  <h2>Search for a Pokémon by name or using its National Pokédex number (1-802).</h2>
                  <p>Have fun!</p>
                </div>
              </div>
            </section>
          </> :
          <Pokemon pokemonData={this.state.data} handleAtParent={this.getEvolutionUrl} id={this.state.data.id}/>
        }
      </main>;
    }

    if (this.state.data && this.state.boxWithDetails) {
      main =
        <main>
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
