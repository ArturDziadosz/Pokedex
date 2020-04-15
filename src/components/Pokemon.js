import React, {Component} from 'react';
import './Pokemon.scss';

import pokeball from '../assets/pokemon-1536847_1280.png';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonData: this.props.pokemonData
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.pokemonData !== this.props.pokemonData) {
      this.setState({
        pokemonData: this.props.pokemonData
      })
    }
  }

  handleGetPokemonDetails = e => {
    const id = e.currentTarget.id;
    this.props.handleAtParent(this.state.pokemonData.species.url, id);
  };

  render() {
    const {pokemonData} = this.state;

    return (
      <>
        {!pokemonData ? null :
          <li className="col-11 pokemon" id={pokemonData.id} onClick={e => this.handleGetPokemonDetails(e)}>
            <div className="pokemon__img" style={pokemonData.sprites.front_default ? {backgroundImage: `url(${pokemonData.sprites.front_default})`} : {backgroundImage: `url(${pokeball})`, transform: "scale(.9)"}}/>
            <div className="pokemon__description">
              <p>#{pokemonData.id}</p>
              <p>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</p>
              <p>{pokemonData.types.map(type => {
                return <span
                  key={type.type.name}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)} </span>
              })}</p>
            </div>
          </li>
        }
      </>
    );
  }
}

export default Pokemon;