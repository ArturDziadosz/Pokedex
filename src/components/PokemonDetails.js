import React, {Component} from 'react';
import './PokemonDetails.scss';

class PokemonDetails extends Component {

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
              <p className="material-icons">
                keyboard_return
              </p>
              <p><span>{pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)} </span>
                <span>#{pokemonDetails.id}</span></p>
              <div style={{backgroundImage: `url(${pokemonData.sprites.front_default})`, height: "300px"}}/>
              <div>Types: {pokemonData.types.map(type => {
                return <span
                  key={type.type.name}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)} </span>;
              })}</div>
              <p>{flavorText[0].flavor_text}</p>
              <div>Stats:
                <p>{pokemonData.stats.map(stat => {
                  return <span
                    key={stat.stat.name}>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}: {stat.base_stat} </span>;
                })}</p>
                <p>Abilities: {pokemonData.abilities.map(ability => {
                  return <span
                    key={ability.ability.name}>{ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)} </span>;
                })}</p>
              </div>
              <p>Height: {pokemonData.height}</p>
              <p>Weight: {pokemonData.weight}</p>
              <p>Color: {pokemonDetails.color.name.charAt(0).toUpperCase() + pokemonDetails.color.name.slice(1)}</p>
              <p>Habitat: {pokemonDetails.habitat.name.charAt(0).toUpperCase() + pokemonDetails.habitat.name.slice(1)}</p>
              <div>
                Evolutions:
                <p> {!pokemonEvolution ? null : pokemonEvolution.chain.species.name.charAt(0).toUpperCase() + pokemonEvolution.chain.species.name.slice(1)}</p>
                <p> {!pokemonEvolution ? null :
                  pokemonEvolution.chain.evolves_to.length !== 0
                    ? pokemonEvolution.chain.evolves_to[0].evolves_to.length !== 0
                    ? <span>{pokemonEvolution.chain.evolves_to[0].evolves_to[0].species.name.charAt(0).toUpperCase() + pokemonEvolution.chain.evolves_to[0].evolves_to[0].species.name.slice(1)} <br />{pokemonEvolution.chain.evolves_to[0].species.name.charAt(0).toUpperCase() + pokemonEvolution.chain.evolves_to[0].species.name.slice(1)}</span>
                    : pokemonEvolution.chain.evolves_to[0].species.name.charAt(0).toUpperCase() + pokemonEvolution.chain.evolves_to[0].species.name.slice(1)
                    : "Ten pokemon nie ewoluuje."}</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default PokemonDetails;