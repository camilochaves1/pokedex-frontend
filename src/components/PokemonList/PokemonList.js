import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard'

export default function PokemonList(props) {
  const { pokemons } = props;

  return (
    <div className='row'>
      {
        pokemons.map((poke, idx) => (
          <div className='col-sm-6 col-md-4 col-lg-3 mb-5' key={poke.name}>
            <PokemonCard
              name={poke.name}
              pokemonId={poke.id}
            />
          </div>
        ))
      }
    </div>
  );
}
