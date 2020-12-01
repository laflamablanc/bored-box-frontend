import React from 'react';
import Graph from '../components/Graph';

const MovieShow = props => {

  return (
    <div>
      <h1>{props.game.name}</h1>
      <img src ={props.game.image} alt={props.game.name}/>
      <Graph game= {props.game}/>
      <h4>Description: </h4>
      <p> {props.game.description} </p>
    </div>
  );
}

export default MovieShow;
