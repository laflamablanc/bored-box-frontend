import React from 'react'
import {connect} from 'react-redux'
import {createBox, returnGame} from '../../redux/actions.js'
import {fetchBoxes} from '../../redux/actions.js'
import NextBoxGameCard from '../../components/NextBoxGameCard'
import LastBoxGameCard from '../../components/LastBoxGameCard'
import CheckoutButton from '../../components/CheckoutButton'
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';



class BoxesContainer extends React.Component {

  state = {
    lastArray: []
  }

  localClickHandler = () => {
    this.props.createBox(this.props.user)
  }

  totalCost = (array) => {
    let total = 0
    array.forEach(game => total += game.price)
    return total.toFixed(2)
  }

  lastBoxReturnHandler = (game) => {
    this.props.returnGame(game.id)
  }

  lastBoxKeepHandler = (game) => {
    this.setState({
      lastArray: [...this.state.lastArray, game]
    })
  }

  render(){
    let gamesArray = this.props.currentBox.games
    let lastBox = this.props.lastBox
    let currentTotal = this.totalCost(gamesArray)
    let lastTotal = this.totalCost(this.state.lastArray) - this.state.lastArray.length*20
    let grandTotal = lastTotal + gamesArray.length * 9.99
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
            <h2> Amount Due: <s className="strike">${currentTotal}</s>  ${gamesArray.length * 9.99} </h2>
          </div>
          <h2>Last Box:</h2>
            <h3> {this.props.currentBox.length === 0 ? "No Boxes Found" : "" } </h3>
            <ul>
                {lastBox.games.map(game=> {
                    return (
                    <div>
                      <LastBoxGameCard key = {game.id} game={game} lastBoxKeepHandler = {this.lastBoxKeepHandler} lastBoxReturnHandler= {this.lastBoxReturnHandler}/>
                      <Divider/>
                    </div>
                  )
                })
                }
            </ul>
            <div className="checkout-container">
              <h2> Amount Due: ${(lastTotal).toFixed(2)} </h2>
            </div>
            <CheckoutButton grandTotal={grandTotal}/>
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
    fetchBoxes: (user) => dispatch(fetchBoxes(user)),
    returnGame: (gameId) => dispatch(returnGame(gameId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BoxesContainer)
