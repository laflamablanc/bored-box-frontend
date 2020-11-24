import React from 'react'
import {connect} from 'react-redux'
import GameCard from '../components/GameCard'
import Sort from '../components/Sort'

class GamesContainer extends React.Component {

  state = {
    games: this.props.games,
    sorted: null
  }

  returnArray = () => {
    if(this.state.sorted === null) {
      return this.state.games
    } else {
      return this.state.sorted
    }
  }

  sortGames = (category) => {
    if (category === "Price-Lo"){
      let array = this.state.games.sort(function(a,b){
        return b.price - a.price
      })
      this.setState({sorted: array})
    } else if (category === "Price-Hi"){
      let array = this.state.games.sort(function(a,b){
        return a.price - b.price
      })
      this.setState({sorted: array})
    } else if (category === "Players"){
      let array = this.state.games.sort(function(a,b){
        return a.players - b.players
      })
      this.setState({sorted: array})
    } else if (category === "Rating"){
      let array = this.state.games.sort(function(a,b){
        return b.rating - a.rating
      })
      this.setState({sorted: array})
    } else if (category === "Popularity"){
      let array = this.state.games.sort(function(a,b){
        return b.rank - a.rank
      })
      this.setState({sorted: array})
    } else {
      this.setState({sorted: null})
    }
  }

  render(){
    let gamesArray = this.returnArray()
    return(
      <div>
        <Sort sortGames = {this.sortGames}/>
        {gamesArray.map(game=> <GameCard game={game}/>)}
      </div>)
  }
}

const mapStateToProps = (state) => {
  return {games: state.api}
}

export default connect(mapStateToProps)(GamesContainer)
