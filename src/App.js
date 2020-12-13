import React from 'react'

import { getPokemonList } from './helpers/client'

import Navbar from './components/Navbar/NavBar';
import PokemonList from './components/PokemonList/PokemonList';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      isLoading: false,
      isError: false,
    };
  }

  componentDidMount() {
    this.setState({ isFetching: true, });

    getPokemonList()
      .then(res => {
        this.setState({ isFetching: false, pokemons: res.data.results, });
      })
      .catch(err => {
        this.setState({ isFetching: false, isError: true, });
      });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />

        <div className='container' style={{paddingTop: '65px'}}>
          {
            this.state.isError &&
            <div className="alert alert-danger" role="alert">
              Failed to fetch the Pokemons. Please reload the page.
            </div>
          }

          {
           this.state.isFetching
             ? <h1>Fetcing Pokemons, please wait...</h1>
             : <PokemonList pokemons={this.state.pokemons} />
          }
        </div>
      </React.Fragment>
    );
  }
}
