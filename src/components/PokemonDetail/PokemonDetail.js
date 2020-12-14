import React from 'react';
import { getPokemonDetail } from '../../helpers/client';
import PokemonStats from '../PokemonStats/PokemonStats';

export default class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonId: props.match.params.id,
      pokemon: {
        stats: [],
      },
      isFetching: false,
      isError: false,
    };
  }

  componentDidMount() {
    this.setState({ isFetching: true, });

    getPokemonDetail(this.props.match.params.id)
      .then(res => {
        this.setState({ isFetching: false, pokemon: res.data, });
      })
      .catch(err => {
        this.setState({ isFetching: false, isError: true, });
      });
  }

  padToThree(number) {
    return parseInt(number) <= 999 ? `00${number}`.slice(-3) : number;
  }

  render() {
    const pokemondIdFormatted = this.padToThree(this.state.pokemonId);

    return(
      // after the getPokemonDetail network call succeeds, this.state.pokemon
      // contains details of the relevant pokemon, see: https://pokeapi.co/docs/v2#pokemon

      <React.Fragment>
        {
          this.state.isError &&
          <div className="alert alert-danger" role="alert">
            Failed to fetch the Pokemon details. Please reload the page.
          </div>
        }

        {
          this.state.isFetching
            ? <h1>Fetcing Pokemon, please wait...</h1>
            : (
              <React.Fragment>
                <div className="text-center mb-5">
                  <h2 className="text-capitalize d-inline-block">
                    {this.state.pokemon.name}
                    <span className="ml-3 text-muted">&#35;{pokemondIdFormatted}</span>
                  </h2>
                </div>

                <div className="border border-secondary rounded">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemondIdFormatted}.png`} alt={this.state.pokemon.name} />
                      </div>

                      { this.state.pokemon.stats.length > 0 &&
                        <div className="bg-light rounded">
                          <PokemonStats stats={this.state.pokemon.stats} />
                        </div>
                      }
                    </div>

                    <div className="col-sm-6">
                      <div className="bg-primary p-2">
                        <div className="row">
                          <div className="col">
                            <div>Height</div>
                            <div>{this.state.pokemon.height}</div>
                          </div>
                          <div className="col">
                            <div>Height</div>
                            <div>{this.state.pokemon.height}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )
        }
      </React.Fragment>
    );
  }
}
