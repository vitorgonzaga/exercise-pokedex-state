import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import React from 'react';
import data from './data';
import './PokedexCSS.css'

class Pokedex extends React.Component {
  constructor(props) {
    super(props)

    this.types = ['All', ...new Set(this.props.pokemons.map(pokemon => pokemon.type))].sort();
    this.state = {
      position: 0,

    };

    this.nextPokemon = this.nextPokemon.bind(this);
      this.pokemonsByType = this.pokemonsByType.bind(this);
  }

  nextPokemon() {
    const { pokemons } = this.props;
    this.setState((previousState, _props) => {
      const { position } = previousState;
      const indexAtual = position === pokemons.length - 1 ? 0 : position + 1;
      return { ...previousState, position: indexAtual };
    }
    )
  }

  pokemonsByType(event) {

    const currentType = event.target.id;
    const filtredsPokemons = data.filter((pokemon) => pokemon.type === currentType);
    console.log(filtredsPokemons);
    return filtredsPokemons.map((pokemon, index) => <Pokemon poke={pokemon[index]} />)
     
    // return this.props = filtredsPokemons;
    // this.setState((previousState, _props) => {
    //   const filtredsPokemons = data.filter((pokemon) => pokemon.type === currentType);
    //   const { pokemonsTypes } = previousState;
    //   return { ...previousState,  pokemonsTypes: filtredsPokemons };
    // })

  }

  render() {
    return (
      <>
        <div className="App">
          <Pokemon poke={this.props.pokemons[this.state.position]} />
        </div>
        <div>
          {this.types.map((tipo) => <button key={tipo} id={tipo} onClick={ (event) => this.pokemonsByType(event) }>{tipo}</button>)}
        </div>
        <div>
        <button className="btn-next row-btn-next" onClick={this.nextPokemon}>Next Pokemon!</button>
        </div>
      </>
    )
  }
}

Pokedex.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};

export default Pokedex;