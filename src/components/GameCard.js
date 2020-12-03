import React from 'react'
import {connect} from 'react-redux'
import {addGameToBox, addGameCollection} from '../redux/actions'
import { useHistory } from "react-router-dom";

const GameCard = (props) => {

  const localClickHandler = (e) => {
    let user = props.user
    let game = props.game
    let currentBox = props.currentBox
    e.target.name === "add-collection" ? props.addGameCollection(user.id, game) : props.addGame(game, currentBox)
  }
    let history = useHistory()
    let game = props.game
    return(
      <div className="GameCard">
        <h1>{game.name}</h1>
        <img src={game.image} alt={game.name} onClick = {()=>history.push("/games/" + game.id)}/>
        <div>Price: ${game.price}</div>
        <div>Number of Players: {game.min_players} - {game.max_players}</div>
        <button className = "box-game-card" name="add-collection" onClick = {localClickHandler}> Add to Collection </button>
        <button className = "box-game-card" name="add-box" onClick = {localClickHandler}> Add to Box </button>
      </div>
    )

}

const mapDispatchToProps = (dispatch) => {
  return {
    addGame: (game, currentBox) => dispatch(addGameToBox(game, currentBox)),
    addGameCollection: (userId, game) => dispatch(addGameCollection(userId, game))
  }
}

const mapStateToProps = (state) => {
  return {user: state.user, currentBox: state.currentBox, state: state}
}

export default connect(mapStateToProps, mapDispatchToProps)(GameCard)
