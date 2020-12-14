import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Navbar from './components/Navbar/NavBar';
import PokemonList from './components/PokemonList/PokemonList';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';

export default function App(props) {
  const pokemonsListBasePath = '/pokemons';

  return (
    <React.Fragment>
      <Navbar />

      <div className="container" style={{paddingTop: '65px'}}>
        <Router>
          <Switch>
            <Route path={`${pokemonsListBasePath}/:id`} component={PokemonDetail} />

            <Route exact path={pokemonsListBasePath} component={PokemonList}></Route>

            <Route>
              <Redirect to={pokemonsListBasePath} />
            </Route>
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}
