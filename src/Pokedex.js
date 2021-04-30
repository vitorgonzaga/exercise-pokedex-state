import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import React from 'react';

class Pokedex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      position: 0,
    }
    this.nextPokemon = this.nextPokemon.bind(this);
  }

  nextPokemon() {
    const { pok } = this.props;
    this.setState((previousState, _props) => {
      const { position } = previousState;
      const indexAtual = position === pok.length - 1 ? 0 : position + 1;
      return { ...previousState, position: indexAtual }
    }
    )
  }

  render() {
    return (
      <>
        <div className="App">
          <Pokemon poke={this.props.pok[this.state.position]} />
        </div>
        <button onClick={this.nextPokemon}>Next Podemon!</button>
      </>
    )
  }
}

Pokedex.propTypes = {
  pok: PropTypes.arrayOf(PropTypes.shape({
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