import React, {Component} from 'react';
import "./App.scss"

import Form from "./Form";
import Filter from "./Filter";
import Error from "./Error";
import Pokemon from "./Pokemon";
import PokemonDetails from "./PokemonDetails";
import More from "./More"

import {Button} from "@material-ui/core";
import pokeball from "../assets/pokemon-1536847_1280.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      api: "https://pokeapi.co/api/v2/",
      pokemons: [],
      searchedPokemon: false,
      noMatchFound: false,
      boxWithDetails: false,
      pokemonDetails: "",
      evolutionChainDetails: "",
      nextPokemonsUrl: "",
      filter: {
        azFilter: false,
        zaFilter: false,
        ascendFilter: true,
        descendFilter: false
      },
      currentPage: 1,
      pokemonPerPage: 10,
    }
  }

  componentDidMount() {
    this.fetchAllPokemons(`${this.state.api}pokemon/`);
  }

  fetchAllPokemons = (url) => {
    fetch(url).then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Connection problem (primal fetch)");
      }
    }).then(allPokemons => {
      this.setState({
        nextPokemonsUrl: allPokemons.next
      });
      allPokemons.results.forEach(pokemon => {
        this.fetchAllPokemonsData(pokemon)
      });
    }).catch(err => {
      console.log(err);
    })
  };

  fetchAllPokemonsData = (pokemon) => {
    fetch(pokemon.url).then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Connection problem (primal fetch)");
      }
    }).then(pokemons => {
      const pokemonsTable = [...this.state.pokemons];
      pokemonsTable.push(pokemons);
      this.setState({
        pokemons: pokemonsTable
      })
    }).catch(err => {
      console.log(err);
    })
  };

  fetchPokemon = (inputValue, boolean) => {
    this.setState({
      inputValue
    }, () => {
      fetch(`${this.state.api}pokemon/${this.state.inputValue}`).then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Connection problem (primal fetch)");
        }
      }).then(pokemon => {
        this.setState({
          searchedPokemon: pokemon,
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
    this.fetchPokemon(id, true);
    fetch(speciesURL).then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Connection problem (Evolution URL)");
      }
    }).then(species => {
      this.renderChain(species.evolution_chain.url);
      this.setState({
        pokemonDetails: species
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
    }).then(pokemonEvolution => {
      this.setState({
        evolutionChainDetails: pokemonEvolution
      })
    }).catch(err => {
      console.log(err);
    })
  };

  closeWindow = () => {
    this.setState({
      boxWithDetails: false,
      searchedPokemon: false,
      noMatchFound: false
    })
  };

  changeFilter = id => {
    this.setState({
      currentPage: 1
    });

    switch (id) {
      case 'az':
        this.setState({
          filter: {
            azFilter: true,
            zaFilter: false,
            ascendFilter: false,
            descendFilter: false
          }
        });
        break;
      case 'za':
        this.setState({
          filter: {
            azFilter: false,
            zaFilter: true,
            ascendFilter: false,
            descendFilter: false
          }
        });
        break;
      case '91':
        this.setState({
          filter: {
            azFilter: false,
            zaFilter: false,
            ascendFilter: false,
            descendFilter: true
          }
        });
        break;
      default:
        this.setState({
          filter: {
            azFilter: false,
            zaFilter: false,
            ascendFilter: true,
            descendFilter: false
          }
        });
    }
  };

  handleChangePage = (e, i) => {
    this.setState({
      currentPage: i
    })
  };

  render() {
    const {pokemons, searchedPokemon, noMatchFound, boxWithDetails, pokemonDetails, evolutionChainDetails, nextPokemonsUrl, filter, currentPage, pokemonPerPage} = this.state;

    //FILTER
    if (filter.ascendFilter) {
      pokemons.sort((a, b) => {
        return a.id - b.id;
      });
    }

    if (filter.descendFilter) {
      pokemons.sort((a, b) => {
        return b.id - a.id;
      });
    }

    if (filter.azFilter) {
      pokemons.sort((a, b) => {
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
      pokemons.sort((a, b) => {
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

    //PAGINATION
    const indexOfLast = currentPage * pokemonPerPage;
    const indexOfFirst = indexOfLast - pokemonPerPage;
    const pageNumber = [];
    const viewedPokemons = pokemons.slice(indexOfFirst, indexOfLast);

    for (let i = 1; i <= Math.ceil(pokemons.length / pokemonPerPage); i++) {
      const element = <li key={i} onClick={e => this.handleChangePage(e, i)}
      ><Button className={currentPage === i ? "active" : ""}>{i}</Button></li>;
      pageNumber.push(element);
    }

    if (pageNumber.length === 1) {
      pageNumber.pop();
    }

    //LOADING DIV
    const loadingDiv = <li className={"col-11 pokemon"} style={{height: "282px"}}>
        <div style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${pokeball})`,
          backgroundSize: "40%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          animation: "shake 3 600ms 500ms linear"
        }}/>
      </li>;

    //MAIN TAG
    let main;
    if (!searchedPokemon && !boxWithDetails) {
      main =
        <main>
          {noMatchFound ?
            <Error handleAtParent={this.closeWindow}/> :
            null
          }
          <section className="container">
            <div className="row row--start">
              <div className="col-11 start">
                <h2>Search for a Pokémon by name or using its National Pokédex number (1-802).</h2>
                <p>Have fun!</p>
              </div>
            </div>
          </section>
          {noMatchFound ? null :
            <>
              <Filter activeFilter={filter} handleAtParent={this.changeFilter}/>
              <section className="container">
                <ul className="row row--pokemon">
                  {pokemons.length < 20 ?
                    <>
                      {loadingDiv}
                      {loadingDiv}
                      {loadingDiv}
                      {loadingDiv}
                    </> :
                    <>
                      {
                        viewedPokemons.map(pokemon => {
                          return <Pokemon pokemonData={pokemon} handleAtParent={this.getEvolutionUrl} key={pokemon.id}
                                          id={pokemon.id}/>
                        })
                      }
                    </>
                  }
                </ul>
              </section>
              <section className="container">
                <ul className="row row--pagination">
                  {pageNumber}
                </ul>
              </section>
              <More nextUrl={nextPokemonsUrl} handleAtParent={this.fetchAllPokemons}/>
            </>
          }
        </main>;
    }

    if (searchedPokemon && !boxWithDetails) {
      main =
        <main>
          {noMatchFound ?
            <>
              <Error handleAtParent={this.closeWindow}/>
              <section className="container">
                <div className="row row--start">
                  <div className="col-11 start">
                    <h2>Search for a Pokémon by name or using its National Pokédex number (1-802).</h2>
                    <p>Have fun!</p>
                  </div>
                </div>
              </section>
            </> :
            <section className="container">
              <ul className="row row--pokemon row--singlePokemon">
                <Pokemon pokemonData={searchedPokemon} handleAtParent={this.getEvolutionUrl}
                         id={searchedPokemon.id}/>
              </ul>
            </section>
          }
        </main>;
    }

    if (searchedPokemon && boxWithDetails) {
      main =
        <main>
          <PokemonDetails pokemonData={searchedPokemon} pokemonDetails={pokemonDetails}
                          pokemonEvolution={evolutionChainDetails} handleAtParent={this.closeWindow}/>
        </main>;
    }

    return (
      <>
        <h1>Pokédex</h1>
        <Form handleAtParent={this.fetchPokemon}/>
        {main}
        <footer> Designed by Artur Dziadosz. Based on <a href={"https://pokeapi.co/"} target={"_blank"}
                                                         rel={"noopener noreferrer"}>PokeApi.</a>
        </footer>
      </>
    );
  }
}

export default App;
