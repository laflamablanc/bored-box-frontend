import React from 'react'
import {connect} from 'react-redux'
import {addGameToBox, addGameCollection} from '../redux/actions'

class GameCard extends React.Component {

  localClickHandler = (e) => {
    let user = this.props.user
    let game = this.props.game
    let currentBox = this.props.currentBox
    e.target.name === "add-collection" ? this.props.addGameCollection(user.id, game) : this.props.addGame(game, currentBox)
  }

  render(){
    let game = this.props.game
    return(
      <div className="GameCard">
        <h1>{game.name}</h1>
        <img src={game.image} alt={game.name}/>
        <div>Price: ${game.price}</div>
        <div>Number of Players: {game.min_players} - {game.max_players}</div>
        <button name="add-collection" onClick = {this.localClickHandler}> Add to Collection </button>
        <button name="add-box" onClick = {this.localClickHandler}> Add to Box </button>
      </div>
    )
  }
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
