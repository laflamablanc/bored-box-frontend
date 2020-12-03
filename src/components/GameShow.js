import React from 'react';
import Graph from '../components/Graph';

const GameShow = props => {
  return (
    <div className = "game-show-container">
      <div className ="game-show-section">
        <h1>{props.game.name}</h1>
        <img src ={props.game.image} alt={props.game.name}/>
        <Graph game= {props.game} userProfile ={props.userProfile}/>
      </div>
      <div className ="game-description-section">
        <h4>Genre: </h4>
        <p> {props.game.genre} </p>
        <h4>Description: </h4>
        <p> {props.game.description} </p>
        <h4>Price: </h4>
        <p> ${props.game.price} </p>
        <h4>Number of Players: </h4>
        <p> {props.game.min_players} - {props.game.max_players} </p>
      </div>
    </div>
  );
}

export default GameShow;
