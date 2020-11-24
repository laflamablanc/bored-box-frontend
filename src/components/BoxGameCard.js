import React from 'react'
import {connect} from 'react-redux'
import {addGameToBox} from '../redux/actions'

class BoxGameCard extends React.Component {

  localClickHandler = (e) => {
    console.log("Remove Game")
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
  return {addGame: (game, currentBox) => dispatch(addGameToBox(game, currentBox))}
}

const mapStateToProps = (state) => {
  return {users: state.users, currentBox: state.currentBox, state: state}
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxGameCard)
