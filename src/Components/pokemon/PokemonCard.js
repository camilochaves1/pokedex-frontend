import React, {Component} from 'react';
import styled from 'styled-components';

const Sprite = styled.img`
  width: 5em;
  height: 5em;
  `;


export default class PokemonCard extends Component {
  state = {
    name: '',
    imageUrl: '',
    pokemonIndex: '',
    imageLoading: true,
    tooManyRequests: false
  };

  componentDidMount(){
    const {name, pokemonId} = this.props;
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonId}.png?raw=true`;

    this.setState({
      name,
      imageUrl,
      pokemonIndex: pokemonId
    });
  }
  render(){

    return (
      <div className='col-md-3 col-sm-6 mb-5'>
        <div className='card'>
            <h5 className='card-header'>{this.state.pokemonIndex}</h5>
            <Sprite
             className='card-img-top rounded mx-auto mt-2'
             onLoad={() => this.setState({imageLoading:false})}
             onError={()=> this.setState({tooManyRequests: true})}
              src={this.state.imageUrl}
              />
            <div className='card-cody mx-auto'>
              <h6 className='card-title'>
                {this.state.name
                  .toLowerCase()
                  .split(' ')
                  .map(
                    letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                  )
                  .join(' ')}
                  </h6>
                </div>
        </div>
      </div>
    );
  }

}
