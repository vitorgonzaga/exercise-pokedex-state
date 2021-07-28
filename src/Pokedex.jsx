import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';

class Pokedex extends React.Component {

    // =================================
    // Seta os estados iniciais
    // =================================
    constructor(props) {
        super(props);
        // Seta os estados iniciais do index para iteração no array e valor do type que será filtrado
        this.state = {
            pokemonIndex: 0,
            filteredType: 'all',
        }

        this.fetchFilteredPokemons = this.fetchFilteredPokemons.bind(this)
        this.filterPokemons = this.filterPokemons.bind(this)
    }
    // =================================


    // Função para filtrar por tipo e p
    fetchFilteredPokemons() {
        // pokemons é a base de dados que chega no componente via props no arquivo App.js
        const { pokemons } = this.props;
        // Ao carregar a página traz todos os pokemons (filteredType === alll)
        const { filteredType } = this.state;

        return pokemons.filter((pokemon) => {
            if (filteredType === 'all') return true;
            return pokemon.type === filteredType;
        })

    }

    // Se clicar no botão 'all' o filteredType será igual 'all'
    filterPokemons (filteredType) {
        this.setState({ filteredType, pokemonIndex: 0}); // Zero porque sempre vai exibir o primeiro item do array filtrado
    }

    // Retorna um array somente dos types de Pokemons (será iterado para montar cada botão que será responsável pelo filtro)
    fetchPokemonTypes () {
        const { pokemons } = this.props;
        return [...new Set(pokemons.reduce((types, { type }) => [...types, type], []))];
    }

    // Faz referencia ao estado atual (state), acessa a chave "pokemonIndex" e soma 1
    nextPokemon(totalOfPokemons) {
        this.setState(state => ({
            pokemonIndex: (state.pokemonIndex + 1) % totalOfPokemons
        }));
    }

    render() {
        const filteredPokemons = this.fetchFilteredPokemons() // Array filtrado ou o arraty total
        const pokemon = filteredPokemons[this.state.pokemonIndex] // Inicialmente vai carregar o index 0
        const pokemonTypes = this.fetchPokemonTypes(); // Chama a função que retorna um array somente dos tipos de pokemon

        return (
            <div className="pokedex">

                <Pokemon pokemon={pokemon} /> {/* Inicialmente carrega o index 0 */}
                {/* Div para os botões All e Types */}
                <div className="pokedex-buttons-panel"> {/* div para os botões */}
                    {/* Primeiro um botão para ativar todos (filtrar all) */}
                    <Button className="filter-button" onClick={() => this.filterPokemons('all')}>All</Button>
                    {/* Nesse caso, a chamada da função tem parâmetro, por isso está no formato callback */}
                    {pokemonTypes.map((type) => (
                        <Button key={ type } className="filter-button" onClick={() => this.filterPokemons(type)}>{ type }</Button>
                    ))}
                </div>
                {/* Botão - Pŕoximo Pokemon */}
                <Button
                className="pokedex-next-button"
                onClick={() => this.nextPokemon(filteredPokemons.length)}
                disabled={ filteredPokemons.length <= 1 }
                >
                    Próximo Pokemon
                </Button>
            </div>
        );
    }
}

export default Pokedex;