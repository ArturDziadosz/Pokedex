import React, {Component} from 'react';
import './Pokemon.scss';

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

  handleGetPokemonDetails = () => {
    this.props.handleAtParent(this.state.pokemonData.species.url);
  };

  render() {
    const {pokemonData} = this.state;

    return (
      <>
        {!pokemonData ? null :
          <section className="container">
            <div className="row">
              <div className="col-11 pokemon" onClick={this.handleGetPokemonDetails}>
                <div className="pokemon__img" style={{backgroundImage: `url(${pokemonData.sprites.front_default}`}}/>
                <div className="pokemon__description">
                  <p>#{pokemonData.id}</p>
                  <p>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</p>
                  <p>{pokemonData.types.map(type => {
                    return <span key={type.type.name}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)} </span>
                  })}</p>
                </div>
              </div>
            </div>
          </section>
        }
      </>
    );
  }
}

export default Pokemon;