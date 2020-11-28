import React from 'react'
import {connect} from 'react-redux'
import {addGameToBox} from '../../redux/actions'
import StarRating from './StarRating'

class GameCard extends React.Component {

  localClickHandler = (e) => {
    let game = this.props.game
    let currentBox = this.props.currentBox
    e.target.name === "add-collection" ? console.log("Add to Collection") : this.props.addGame(game, currentBox)
  }

  render(){
    console.log(this.props.currentBox)
    let game = this.props.game
    return(
      <div className="GameCard">
        <h1>{game.name}</h1>
        <img src={game.image}/>
        <h4>Genre: {game.genre} </h4>
        <h4>Number of Players: {game.min_players} - {game.max_players}</h4>
        <h4>My Rating:<StarRating/></h4>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {addGame: (game, currentBox) => dispatch(addGameToBox(game, currentBox))}
}

const mapStateToProps = (state) => {
  return {users: state.users, currentBox: state.currentBox, state: state}
}

export default connect(mapStateToProps, mapDispatchToProps)(GameCard)
