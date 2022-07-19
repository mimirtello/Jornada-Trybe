import React from 'react';
import Pokemon from './Pokemon'

class Pokedex extends React.Component{
    render() {
        const { pokemons } = this.props;
        return(
            <main className='centralizar'>
            <div className='pokedex'>
            {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
            </div>
            </main>     
        )
    }
}

export default Pokedex;