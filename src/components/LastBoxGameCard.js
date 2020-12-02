import React from 'react'
import {connect} from 'react-redux'
import {removeGameFromBox} from '../redux/actions'
import Grid from '@material-ui/core/Grid';


class LastBoxGameCard extends React.Component {

  // localClickHandler = (e) => {
  //   const gameId = this.props.game.id
  //   // console.log("Game Id", gameId)
  //   const boxGameId = this.props.currentBox.box_games.find(element => element.game_id === gameId)
  //   console.log()
  //   // const boxId = this.props.currentBox[0].id
  //   this.props.removeGameFromBox(boxGameId.id, gameId)
  //   // console.log("Remove", this.props)
  // }

  localClickHandler = (e) => {
    if (e.target.name === "keep") {
      console.log("keepepepe")
      this.props.lastBoxKeepHandler(this.props.game)
    } else {
      console.log("return me")
      this.props.lastBoxReturnHandler(this.props.game)
    }
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
            <h3>Price: ${(this.props.game.price - 20.00).toFixed(2)}</h3>
            <button name="keep" onClick = {this.localClickHandler}> Keep Game</button>
            <button name="return" onClick = {this.localClickHandler}> Return Game</button>
          </Grid>
        </React.Fragment>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {removeGameFromBox: (gameId, boxId) => dispatch(removeGameFromBox(gameId, boxId))}
}

const mapStateToProps = (state) => {
  return {currentBox: state.currentBox}
}

export default connect(mapStateToProps, mapDispatchToProps)(LastBoxGameCard)
