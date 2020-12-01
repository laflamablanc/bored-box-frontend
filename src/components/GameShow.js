import React from 'react';

const MovieShow = props => {

  return (
    <div>
      <h1>{props.game.name}</h1>
      <img src ={props.game.image} alt={props.game.name}/>
      <h4>Description: </h4>
      <p> {props.game.description} </p>
    </div>
  );
}

export default MovieShow;
