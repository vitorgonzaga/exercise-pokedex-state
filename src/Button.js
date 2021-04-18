import React, { Component } from 'react';

class Button extends Component {
  constructor() {
    super();
    this.nextPokemon = this.nextPokemon.bind(this);
  }

  nextPokemon() {
    let { pokemons, setIndex, index } = this.props.values;
    pokemons[index + 1] ? setIndex(index + 1) : setIndex((index = 0));
  }

  render() {
    return <button className='btn btn-next' onClick={this.nextPokemon}>Próximo!</button>;
  }
}

export default Button;
