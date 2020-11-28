import React from 'react'
import {connect} from 'react-redux'
import {createBox} from '../../redux/actions.js'
import {fetchBoxes} from '../../redux/actions.js'
import BoxGameCard from '../../components/BoxGameCard'
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';


class BoxesContainer extends React.Component {

  localClickHandler = () => {
    this.props.createBox(this.props.user)
  }

  totalCost = (array) => {
    let total = 0
    array.forEach(game => total += game.price)
    return total.toFixed(2)
  }

  render(){
    let gamesArray = this.props.currentBox.games
    console.log("GAMES ARRAY", gamesArray)
    if (gamesArray) {
      return(
        <div className = "boxes-container">
          <h2>My Boxes:</h2>
          <h3> {this.props.currentBox.length === 0 ? "No Boxes Found" : "" } </h3>
          <ul>
              {gamesArray.map(game=> {
                  return (
                  <div>
                    <BoxGameCard key = {game.id} game={game}/>
                    <Divider/>
                  </div>
                )
              })
              }
          </ul>
          <div className="checkout-container">
            <h2> Total: ${this.totalCost(gamesArray)}</h2>
            <button> Checkout </button>
          </div>
        </div>)
    } else {
      return (
        <div className = "boxes-container">
          <h2>Box Is Empty </h2>
          <button onClick={this.localClickHandler}>
          Create New Box
          </button>
        </div>
      )
    }
  }
  componentDidMount(){
    this.props.fetchBoxes(this.props.user)
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    boxes: state.boxes,
    currentBox: state.currentBox
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBox: (user) => dispatch(createBox(user)),
    fetchBoxes: (user) => dispatch(fetchBoxes(user))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BoxesContainer)
