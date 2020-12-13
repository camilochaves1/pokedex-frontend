import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_POKE_API_BASE_URL,
  headers: {'Content-Type': 'application/json'}
});

const getPokemonList = (offest = 0, limit = 20) => {
  return instance.get('/pokemons', { params: { offest, limit } });
};

const getPokemonDetail = (pokemonId = 1) => {
  return instance.get(`/pokemons/${pokemonId}`);
};

export {
  getPokemonList,
  getPokemonDetail,
}
