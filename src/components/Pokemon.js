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


  render() {
    const {pokemonData} = this.state;

    return (
      <>
        <section className="container">
          <div className="row">
            <div className="col-11 pokemon">
              <div className="pokemon__img"/>
              <div className="pokemon__description">
                <p>#001</p>
                <p>{!pokemonData ? null : pokemonData.name}</p>
                <p>Grass</p>
              </div>
            </div>
            <div className="col-11 pokemon">
              <div className="pokemon__img"/>
              <div className="pokemon__description">
                <p>#002</p>
                <p>Ivysaur</p>
                <p>Grass</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Pokemon;