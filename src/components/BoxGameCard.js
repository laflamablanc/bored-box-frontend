import React from 'react'
import {connect} from 'react-redux'
import {removeGame} from '../redux/actions'
import Grid from '@material-ui/core/Grid';


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
      <div className="box-game-card">
        <React.Fragment>
          <Grid item xs ={3} spacing ={1}>
            <img src ={this.props.game.image} alt = {this.props.game.title}/>
          </Grid>
          <Grid xs ={3}>
            <h2> {this.props.game.name}</h2>
          </Grid>
          <Grid xs ={3}>
            <h3> QTY: 1 </h3>
          </Grid>
          <Grid xs ={3}>
            <h3>Price: ${this.props.game.price}</h3>
            <button name="remove" onClick = {this.localClickHandler}> Remove </button>
          </Grid>
        </React.Fragment>
      </div>
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
