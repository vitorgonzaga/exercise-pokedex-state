import React, { Component } from 'react';

class ButtonType extends Component {
  constructor() {
    super();
    this.typePokemon = this.typePokemon.bind(this);
  }

  typePokemon() {
    let { setPokemons, setIndex, index } = this.props.values;
    index = 0;
    setIndex(index);
    setPokemons(this.props.type);
  }

  render() {
    return <button onClick={this.typePokemon}>{this.props.type || 'All'}</button>;
  }
}

export default ButtonType;
