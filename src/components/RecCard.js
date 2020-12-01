import React from 'react'
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid';
import {addGameToBox, addGameCollection} from '../redux/actions'


class BoxGameCard extends React.Component {

  localClickHandler = (e) => {
    const game = this.props.game
    const currentBox = this.props.currentBox
    this.props.addGameToBox(game, currentBox)
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
            <h3> BoredScore™️:
              <div>
                {this.props.score}
              </div>
            </h3>
          </Grid>
          <Grid xs ={3}>
            <h3> Avg. Rating: {this.props.game.rating.toFixed(2)}</h3>
            <button name="add-rec" onClick = {this.localClickHandler}> Add to Box </button>
          </Grid>
        </React.Fragment>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {addGameToBox: (game, currentBox) => dispatch(addGameToBox(game, currentBox))}
}

const mapStateToProps = (state) => {
  return {currentBox: state.currentBox}
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxGameCard)
