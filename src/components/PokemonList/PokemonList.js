import React from 'react';
import qs from 'query-string';

import PokemonCard from '../PokemonCard/PokemonCard'
import { getPokemonList } from '../../helpers/client';

import PokemonListNavigate from '../PokemonListNavigate/PokemonListNavigate';

export default class PokemonList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      isFetching: false,
      isError: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      this.fetchData();
    }
  }

  fetchData() {
    this.setState({ isFetching: true, });

    const { location: { search }} = this.props;
    const { offset, limit } = qs.parse(search);

    getPokemonList(offset, limit)
      .then(res => {
        this.setState({ isFetching: false, pokemons: res.data.results, });
      })
      .catch(err => {
        this.setState({ isFetching: false, isError: true, });
      });
  }

  renderPokemonList(pokemons) {
    return (
      <React.Fragment>
        <div className="mb-3">
          <PokemonListNavigate />
        </div>

        <div className='row'>
          {
            pokemons.map(poke => (
              <div className='col-sm-6 col-md-4 col-lg-3 mb-5' key={poke.name}>
                <PokemonCard
                  name={poke.name}
                  pokemonId={poke.id}
                />
              </div>
            ))
          }
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.isError &&
          <div className="alert alert-danger" role="alert">
            Failed to fetch the Pokemons. Please reload the page.
          </div>
        }

        {
          this.state.isFetching
            ? <h1>Fetcing Pokemons, please wait...</h1>
            : this.renderPokemonList(this.state.pokemons)
        }
      </React.Fragment>
    );
  }
}
