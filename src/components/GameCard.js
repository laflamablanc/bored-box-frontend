import React from 'react'
import {connect} from 'react-redux'
import {addGameToBox} from '../redux/actions'

class GameCard extends React.Component {

  localClickHandler = (e) => {
    let game = this.props.game
    let user = this.props.users[this.props.users.length-1]
    console.log("Checking", game, user)
    e.target.name === "add-collection" ? console.log("Add to Collection") : this.props.addGame(this.props.game, user)
  }

  render(){
    return(
      <div className="GameCard">
        <h1>{this.props.game.name}</h1>
        <img src={this.props.game.image}/>
        <div>Price: ${this.props.game.price}</div>
        <div>Number of Players: {this.props.game.players}</div>
        <button name="add-collection" onClick = {this.localClickHandler}> Add to Collection </button>
        <button name="add-box" onClick = {this.localClickHandler}> Add to Box </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  // MAKES SURE TO FIX THIS SO ITS BOX INSTEAD OF USER
  return {addGame: (game, user) => dispatch(addGameToBox(game, user))}
}

const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps, mapDispatchToProps)(GameCard)
