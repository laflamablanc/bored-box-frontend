import React from 'react'
import {connect} from 'react-redux'
import {createBox} from '../../redux/actions.js'
import {fetchBoxes} from '../../redux/actions.js'
import RecCard from '../../components/RecCard'
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';


// <ul>
//     {recsArray.map(game=> {
//         return (
//         <div>
//           <RecCard key = {game.id} game={game}/>
//           <Divider/>
//         </div>
//       )
//     })
//     }
// </ul>
// <div className="checkout-container">
//   <h2> Total: ${this.totalCost(recsArray)}</h2>
//   <button> Checkout </button>
// </div>

class RecommendationsContainer extends React.Component {

  localClickHandler = () => {
    this.props.createBox(this.props.user)
  }

  totalCost = (array) => {
    let total = 0
    array.forEach(game => total += game.price)
    return total.toFixed(2)
  }

  render(){
    let recsArray = this.props.gameRecs
    console.log("RECS ARRAY", recsArray)
    if (recsArray) {
      return(
        <div className = "boxes-container">
          <h2>My Recommendations:</h2>
          <h3> {this.props.gameRecs.length === 0 ? "No Recs Found" : "" } </h3>
          {recsArray.map(rec=> {
                 return (
                 <div>
                   <RecCard key = {rec.game.id} game={rec.game} score = {rec.similarity}/>
                   <Divider/>
                 </div>
               )
             })
             }
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


}

const mapStateToProps = (state) => {
  return {
    gameRecs: state.gameRecs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBox: (user) => dispatch(createBox(user)),
    fetchBoxes: (user) => dispatch(fetchBoxes(user))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RecommendationsContainer)
