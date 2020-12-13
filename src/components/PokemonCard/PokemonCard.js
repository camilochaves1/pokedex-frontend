import React from 'react';

export default function PokemonCard(props) {
  const {name, pokemonId} = props;
  const padToThree = number => parseInt(number) <= 999 ? `00${number}`.slice(-3) : number;
  const pokemondIdFormatted = padToThree(pokemonId);

  return (
    <div className="card">
      <a href="#">
        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemondIdFormatted}.png`} alt={name} />
      </a>
      <div className="card-body">
        <p className="card-text text-muted font-weight-bold">&#35;{pokemondIdFormatted}</p>
        <h5 className="card-title text-capitalize">{name}</h5>
      </div>
    </div>
  );
}
