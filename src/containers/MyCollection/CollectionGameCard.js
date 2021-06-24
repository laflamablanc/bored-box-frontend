import React from 'react'
import {connect} from 'react-redux'
import {removeGameFromCollection, rateGame} from '../../redux/actions'
import StarRating from './StarRating'

class CollectionGameCard extends React.Component {

  localClickHandler = (e) => {
    let game = this.props.game
    const userGameId = this.props.collection.user_games.find(element => element.game_id === game.id).id
    this.props.removeGameFromCollection(userGameId, game.id)
  }

  ratingHandler = (rating) => {
    let gameId = this.props.game.id
    let user_games = this.props.collection.user_games
    let mygame = user_games.find(ug => ug.game_id === gameId)
    this.props.rateGame(rating, mygame.id)
  }

  render(){
    let game = this.props.game
    let rating = this.props.collection.user_games.find(ug => ug.game_id === game.id).rating
    return(
      <div className="GameCard">
        <h1>{game.name}</h1>
        <img src={game.image} alt={game.name}/>
        <h4>Genre: {game.genre} </h4>
        <h4>Number of Players: {game.min_players} - {game.max_players}</h4>
        <h4>My Rating:<StarRating ratingHandler={this.ratingHandler} rating={rating}/></h4>
        <button onClick={this.localClickHandler}> Remove </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeGameFromCollection: (userGameId, gameId) => dispatch(removeGameFromCollection(userGameId, gameId)),
    rateGame: (rating, userGameId) => dispatch(rateGame(rating, userGameId))
  }
}

const mapStateToProps = (state) => {
  return {user: state.user, collection: state.collection, state: state}
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionGameCard)
