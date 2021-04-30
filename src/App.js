import './App.css';
import React from 'react';
import Pokedex from './Pokedex';
import pokemonData from './data';


function App() {
  return (
    <div>
     <Pokedex pokemons= { pokemonData }/>
    </div>
  );
}

export default App;
