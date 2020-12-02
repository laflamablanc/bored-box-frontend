import React from 'react'
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid';
import {addGameToBox} from '../redux/actions'
import { useHistory } from "react-router-dom";


const RecCard = (props) => {

  const localClickHandler = (e) => {
    const game = props.game
    const currentBox = props.currentBox

    props.addGameToBox(game, currentBox)
  }

    let history = useHistory()
    return(
      <div className="box-game-card">
        <React.Fragment>
          <Grid item xs ={3} spacing ={1}>
            <img src ={props.game.image} alt = {props.game.title} onClick = {()=>history.push("/games/" + props.game.id)}/>
          </Grid>
          <Grid xs ={3}>
            <h2> {props.game.name}</h2>
          </Grid>
          <Grid xs ={3}>
            <h3> BoredScore™️:
              <div>
                {props.score}
              </div>
            </h3>
          </Grid>
          <Grid xs ={3}>
            <h3> Avg. Rating: {props.game.rating.toFixed(2)}</h3>
            <button name="add-rec" onClick = {localClickHandler}> Add to Box </button>
          </Grid>
        </React.Fragment>
      </div>
    )
  }

const mapDispatchToProps = (dispatch) => {
  return {addGameToBox: (game, currentBox) => dispatch(addGameToBox(game, currentBox))}
}

const mapStateToProps = (state) => {
  return {currentBox: state.currentBox}
}

export default connect(mapStateToProps, mapDispatchToProps)(RecCard)
