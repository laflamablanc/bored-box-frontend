import React from 'react'
import {connect} from 'react-redux'
import {createBox} from '../../redux/actions.js'
import {fetchBoxes} from '../../redux/actions.js'
import NextBoxGameCard from '../../components/NextBoxGameCard'
import LastBoxGameCard from '../../components/LastBoxGameCard'
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
    let lastBox = this.props.lastBox
    console.log("GAMES ARRAY", gamesArray)
    if (gamesArray) {
      return(
        <div className = "boxes-container">
          <h2>Next Box:</h2>
          <h3> {this.props.currentBox.length === 0 ? "No Boxes Found" : "" } </h3>
          <ul>
              {gamesArray.map(game=> {
                  return (
                  <div>
                    <NextBoxGameCard key = {game.id} game={game}/>
                    <Divider/>
                  </div>
                )
              })
              }
          </ul>
          <div className="checkout-container">
            <h2> Total: <s className="strike">${this.totalCost(gamesArray)}</s>  ${gamesArray.length * 9.99} </h2>
            <button> Checkout </button>
          </div>
          <h2>Last Box:</h2>
            <h3> {this.props.currentBox.length === 0 ? "No Boxes Found" : "" } </h3>
            <ul>
                {lastBox.games.map(game=> {
                    return (
                    <div>
                      <LastBoxGameCard key = {game.id} game={game}/>
                      <Divider/>
                    </div>
                  )
                })
                }
            </ul>
            <div className="checkout-container">
              <h2> Total: ${this.totalCost(lastBox.games)- lastBox.games.length*20} </h2>
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
    currentBox: state.currentBox,
    lastBox: state.lastBox
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBox: (user) => dispatch(createBox(user)),
    fetchBoxes: (user) => dispatch(fetchBoxes(user))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BoxesContainer)
