import React from 'react';

class NextPokemon extends React.Component {

  constructor() {
    super()

    this.state = {
      countClicks: 0,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      countClicks: 1,
    })
  }

  render() {
    return (
      <button onClick={this.handleClick} className='' >Próximo Pokemon</button>
    )
  }
}

export default NextPokemon
