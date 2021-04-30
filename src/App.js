import React from 'react';
import './App.css';
import pokemons from './data';
import Pokemon from './Pokemon';
import logo from './pokeball.png'

class App extends React.Component {
  constructor() {
    super()
    this.proximoPokemon = this.proximoPokemon.bind(this);
    this.filter = this.filter.bind(this);
    this.all = this.all.bind(this);

    this.state = {
      list: [...pokemons],
      index: 0,
    }
  }

  proximoPokemon() {
    this.setState((estadoAnterior, _props) => ({
      index: estadoAnterior.index + 1
    }));
    if (this.state.index === this.state.list.length - 1) {
      this.setState({ index: 0 });
    }
  }

  filter(type) {
    const lista = pokemons.filter((pokemon) => pokemon.type === type);

    console.log(lista);
    this.setState({ list: lista });
    console.log(this.state.list);
  }
  all() {
    this.setState({ list: pokemons });
  }



  render() {
    return (
      <div>
        <header>
          <div>
            <h1>My Pokedex</h1>
          </div>
          <div>
          <img src={logo} className="pokeball" atl="123 "></img>
          </div>
        </header>
        <main className="App">
          <section>
            <Pokemon pokemon={this.state.list[this.state.index]} />
          </section>

          <section className="listBtn">
             <button className="btnType" onClick={this.all}>All</button>

             <button className="btnType" onClick={() => {
              this.filter('Fire')
            }}>Fire</button>

             <button className="btnType" onClick={() => {
              this.filter('Psychic')
            }}>Psychic</button>

             <button className="btnType" onClick={() => {
              this.filter('Electric')
            }}>Electric</button>

             <button className="btnType" onClick={() => {
              this.filter('Bug')
            }}>Bug</button>

             <button className="btnType" onClick={() => {
              this.filter('Poison')
            }}>Poison</button>

             <button className="btnType" onClick={() => {
              this.filter('Normal')
            }}>Normal</button>

             <button className="btnType" onClick={() => {
              this.filter('Dragon')
            }}>Dragon</button>
          </section>

          <section className='listNext' >
            <button  className='btnNext'onClick={this.proximoPokemon}>Proximo</button>
          </section>

        </main>
      </div>
    )
  }
}

export default App;