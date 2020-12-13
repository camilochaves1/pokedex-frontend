import React, {Component} from 'react';
import styled from 'styled-components';
import PokemonCard from './PokemonCard'
import axios from 'axios';

export default class PokemonList extends Component {
  state = {
    url:'https://pokedexinterview.herokuapp.com/pokemons/',
    pokemon:null
  };
  async componentDidMount(){
    const res = await axios.get(this.state.url);
    this.setState({pokemon: res.data['results']});

  }
  render(){
    return (
    <React.Fragment>
      {this.state.pokemon? (
        <div className='row'>
        {this.state.pokemon.map(pokemon => (
          <PokemonCard
            key = {pokemon.name}
            name={pokemon.name}
            pokemonId= {pokemon.id}
          />
        ))}
        </div>
      ) : (
        <h1>Loading Pokemon </h1>
      )}
    </React.Fragment>
  );
  }

}
