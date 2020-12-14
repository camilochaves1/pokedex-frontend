import React from 'react';

export default function Navbar(props) {
  return (
    <header>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
        <a href="/pokemons" className='navbar-brand col-sm-3 col-md-2 mr-0 align-items-center'>Pokedex</a>
      </nav>
    </header>
  );
}
