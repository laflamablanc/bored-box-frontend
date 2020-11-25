import React from 'react'
import {connect} from 'react-redux'
import {removeGame} from '../redux/actions'

class BoxGameCard extends React.Component {

  localClickHandler = (e) => {
    const gameId = this.props.game.id
    // console.log("Game Id", gameId)
    const boxGameId = this.props.currentBox.box_games.find(element => element.game_id === gameId)
    console.log("BOXGAMEID", boxGameId.id)
    // const boxId = this.props.currentBox[0].id
    this.props.removeGame(boxGameId.id, gameId)
    // console.log("Remove", this.props)
  }

  render(){
    return(
      <li className="BoxGameCard">
        <h4> {this.props.game.name}</h4>
        <div>Price: ${this.props.game.price}</div>
        <button name="remove" onClick = {this.localClickHandler}> X </button>
      </li>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {removeGame: (gameId, boxId) => dispatch(removeGame(gameId, boxId))}
}

const mapStateToProps = (state) => {
  return {currentBox: state.currentBox}
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxGameCard)
