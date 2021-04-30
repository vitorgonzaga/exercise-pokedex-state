import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
import Button from './Button'

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      numberOfClicks: 0,
    }
  }

  handleClick() {
    if (this.state.numberOfClicks === pokemons.length-1) {
      this.setState({ numberOfClicks: 0 })
    } else {
      this.setState((initialState, _props) => ({
        numberOfClicks: initialState.numberOfClicks + 1,
      }))
    }
  }

  render() {
    const types = pokemons.reduce((array, { type }) => {
      if (array.includes(type)) return array
      else return array.concat(type)
    }, ['All']);

    return (
      <div className="pokedex">
        <Pokemon pokemon={pokemons[this.state.numberOfClicks]} />
        <button onClick={this.handleClick}>Próximo</button>
        {types.map((type)=> <Button type={type} />)}
      </div>

    )
  }
}

export default Pokedex;