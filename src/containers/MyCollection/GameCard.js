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
    return(
      <div className="GameCard">
        <h1>{this.props.game.name}</h1>
        <img src={this.props.game.image}/>
        <div>Price: ${this.props.game.price}</div>
        <div>Number of Players: {this.props.game.players}</div>
        <StarRating/>
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
