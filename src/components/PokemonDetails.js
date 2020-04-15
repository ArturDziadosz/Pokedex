import React, {Component} from 'react';
import './PokemonDetails.scss';

import {Link} from "react-scroll";

import Error from "./Error";
import pokeball from "../assets/pokemon-1536847_1280.png";

class PokemonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonData: this.props.pokemonData,
      pokemonDetails: this.props.pokemonDetails,
      pokemonEvolution: this.props.pokemonEvolution
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.pokemonData !== this.props.pokemonData) {
      this.setState({
        pokemonData: this.props.pokemonData,
      })
    }
    if (prevProps.pokemonDetails !== this.props.pokemonDetails) {
      this.setState({
        pokemonDetails: this.props.pokemonDetails,
      })
    }
    if (prevProps.pokemonEvolution !== this.props.pokemonEvolution) {
      this.setState({
        pokemonEvolution: this.props.pokemonEvolution,
      })
    }
  }

  handleClose = () => {
    this.props.handleAtParentClose()
  };

  handleGetPokemonDetails = e => {
    const name = e.currentTarget.dataset.name;
    const url = e.currentTarget.id;
    this.props.handleAtParentGet(url, name);
  };

  render() {
    const {pokemonData, pokemonDetails, pokemonEvolution} = this.state;
    let flavorText;
    if (typeof pokemonDetails === "object") {
      flavorText = pokemonDetails.flavor_text_entries.filter(elem => elem.language.name === "en");
    }

    return (
      <>
        {(typeof pokemonData === "string" || typeof pokemonDetails === "string") ?
          <Error errorText={"Oops! Something goes wrong."} handleAtParent={e => this.handleClose(e)}/> :
          <section className="container">
            <div className="row row--detailedPokemon">
              <div className="col-11 pokemon--details">
                <Link to={"title"} smooth={true} duration={500}>
                  <p className="material-icons pokemon__exit" onClick={e => this.handleClose(e)}>
                    keyboard_return
                  </p>
                </Link>
                <p className={"pokemon__title"}><span
                  className={"pokemon__title__name"}>{pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)} </span>
                  <span className={"pokemon__title__id"}>#{pokemonDetails.id}</span></p>
                <div className={"pokemon__img"}
                     style={{backgroundImage: `url(${pokemonData.sprites.front_default})`}}/>
                <div className={"pokemon__types"}>{pokemonData.types.map(type => {
                  return <span
                    key={type.type.name}
                    className={"pokemon__types__type"}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)} </span>;
                })}</div>
                <p className={"pokemon__flavorText"}>{flavorText[0].flavor_text}</p>
                <div className={"pokemon__box"}>
                  <div className={"pokemon__box__abilities"}>Abilities:
                    {pokemonData.abilities.map(ability => {
                      return <p
                        key={ability.ability.name}
                        className={"box__abilities__ability"}>{ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}</p>;
                    })}
                    <br/>
                    <p className={"pokemon__box__height"}>Height: {pokemonData.height}</p>
                    <p className={"pokemon__box__weight"}>Weight: {pokemonData.weight}</p>
                  </div>
                  <div className={"pokemon__box__stats"}>Statistics:
                    {pokemonData.stats.map(stat => {
                      return <p
                        key={stat.stat.name}
                        className={"box__stats__stat"}>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}: {stat.base_stat}</p>;
                    })}
                  </div>
                </div>
                <div className={"pokemon__box2"}>
                  <p>Evolutions:</p>
                  {typeof pokemonEvolution === "string" ? <div style={{
                      width: "100%", height: "200px",
                      backgroundImage: `url(${pokeball})`,
                      backgroundSize: "40%",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      animation: "shake 3 600ms 500ms linear"
                    }}/> :
                    <>
                      <p
                        className={pokemonDetails.name === pokemonEvolution.chain.species.name ? "active" : ""}
                        onClick={e => this.handleGetPokemonDetails(e)}
                        id={pokemonEvolution.chain.species.url}
                        data-name={pokemonEvolution.chain.species.name}>
                        {pokemonEvolution.chain.species.name.charAt(0).toUpperCase() +
                        pokemonEvolution.chain.species.name.slice(1)}
                      </p>
                      <p className="material-icons arrow">
                        navigation
                      </p>
                    </>
                  }
                  {typeof pokemonEvolution === "string" ? null :
                    pokemonEvolution.chain.evolves_to.length !== 0 ?
                      pokemonEvolution.chain.evolves_to[0].evolves_to.length !== 0 ?
                        <>
                          <p
                            className={pokemonDetails.name === pokemonEvolution.chain.evolves_to[0].species.name ? "active" : ""}
                            onClick={e => this.handleGetPokemonDetails(e)}
                            id={pokemonEvolution.chain.evolves_to[0].species.url}
                            data-name={pokemonEvolution.chain.evolves_to[0].species.name}>
                            {pokemonEvolution.chain.evolves_to[0].species.name.charAt(0).toUpperCase() + pokemonEvolution.chain.evolves_to[0].species.name.slice(1)}
                          </p>
                          <p className="material-icons arrow">
                            navigation
                          </p>
                          <p
                            className={pokemonDetails.name === pokemonEvolution.chain.evolves_to[0].evolves_to[0].species.name ? "active" : ""}
                            onClick={e => this.handleGetPokemonDetails(e)}
                            id={pokemonEvolution.chain.evolves_to[0].evolves_to[0].species.url}
                            data-name={pokemonEvolution.chain.evolves_to[0].evolves_to[0].species.name}>
                            {pokemonEvolution.chain.evolves_to[0].evolves_to[0].species.name.charAt(0).toUpperCase() + pokemonEvolution.chain.evolves_to[0].evolves_to[0].species.name.slice(1)}
                          </p>
                        </> :
                        <p
                          className={pokemonDetails.name === pokemonEvolution.chain.evolves_to[0].species.name ? "active" : ""}
                          onClick={e => this.handleGetPokemonDetails(e)}
                          id={pokemonEvolution.chain.evolves_to[0].species.url}
                          data-name={pokemonEvolution.chain.evolves_to[0].species.name}>
                          {pokemonEvolution.chain.evolves_to[0].species.name.charAt(0).toUpperCase() + pokemonEvolution.chain.evolves_to[0].species.name.slice(1)}
                        </p>
                      : <p>This Pokémon does not evolve.</p>
                  }
                </div>
              </div>
            </div>
          </section>
        }
      </>
    );
  }
}

export default PokemonDetails;