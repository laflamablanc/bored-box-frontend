import React from 'react'
import {connect} from 'react-redux'
import GameCard from '../components/GameCard'

class GamesContainer extends React.Component {
  render(){
    let games = this.props.games.slice(0,99)
    return(
      <div>
        {games.map(game=> <GameCard game={game}/>)}
      </div>)
  }
}

const mapStateToProps = (state) => {
  return {games: state.api}
}

export default connect(mapStateToProps)(GamesContainer)
