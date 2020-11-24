import React from 'react'
import {connect} from 'react-redux'
import {createBox} from '../../redux/actions.js'
import {fetchBoxes} from '../../redux/actions.js'

class BoxesContainer extends React.Component {

  localClickHandler = () => {
    this.props.createBox(this.props.user)
  }

  render(){
    console.log(this.props.currentBox.games)
    if (this.props.currentBox.games) {
      return(<div>
        <h2>My Boxes:</h2>
        <h3> {this.props.currentBox.length === 0 ? "No Boxes Found" : "" } </h3>
        <button onClick={this.localClickHandler}>
        Create New Box
        </button>
        <ul>
        {this.props.currentBox.games.map(game=> <li>{game.name} - $ {game.price}</li>)}
        </ul>
        <button> Checkout </button>
        </div>)
    } else {
      return (
        <div>
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
