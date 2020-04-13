import React, {Component} from 'react';
import './PokemonDetails.scss';

class PokemonDetails extends Component {

  handleClose = () => {
    this.props.handleAtParent()
  };

  render() {
    const pokemonData = this.props.pokemonData;
    const pokemonDetails = this.props.pokemonDetails;
    const flavorText = pokemonDetails.flavor_text_entries.filter(elem => elem.language.name === "en");
    const pokemonEvolution = this.props.pokemonEvolution;

    return (
      <>
        <section className="container">
          <div className="row">
            <div className="col-11 pokemon--details">
              <p className="material-icons pokemon__exit" onClick={this.handleClose}>
                keyboard_return
              </p>
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
                {!pokemonEvolution ? null :
                  <>
                    <p className={pokemonDetails.name === pokemonEvolution.chain.species.name ? "active" : ""}>{pokemonEvolution.chain.species.name.charAt(0).toUpperCase() +
                    pokemonEvolution.chain.species.name.slice(1)}</p>
                    <p className="material-icons arrow">
                      navigation
                    </p>
                  </>
                }
                {!pokemonEvolution ? null :
                  pokemonEvolution.chain.evolves_to.length !== 0
                    ? pokemonEvolution.chain.evolves_to[0].evolves_to.length !== 0
                    ?
                    <>
                      <p className={pokemonDetails.name === pokemonEvolution.chain.evolves_to[0].species.name ? "active" : ""}>{pokemonEvolution.chain.evolves_to[0].species.name.charAt(0).toUpperCase() + pokemonEvolution.chain.evolves_to[0].species.name.slice(1)}</p>
                      <p className="material-icons arrow">
                        navigation
                      </p>
                      <p className={pokemonDetails.name === pokemonEvolution.chain.evolves_to[0].evolves_to[0].species.name ? "active" : ""}>{pokemonEvolution.chain.evolves_to[0].evolves_to[0].species.name.charAt(0).toUpperCase() + pokemonEvolution.chain.evolves_to[0].evolves_to[0].species.name.slice(1)}</p>
                    </>
                    :
                    <p className={pokemonDetails.name === pokemonEvolution.chain.evolves_to[0].species.name ? "active" : ""}>{pokemonEvolution.chain.evolves_to[0].species.name.charAt(0).toUpperCase() + pokemonEvolution.chain.evolves_to[0].species.name.slice(1)}</p>
                    : <p>This Pokémon does not evolve.</p>
                }
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default PokemonDetails;