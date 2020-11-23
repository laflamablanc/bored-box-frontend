import React from 'react'
import {connect} from 'react-redux'
import GameCard from '../components/GameCard'

class MyGames extends React.Component {
  render(){
    let tenGames = this.props.games.slice(0,10)
    console.log("tenGames", tenGames)
    return(
      <div>
        {tenGames.map(game=> <GameCard game={game}/>)}
      </div>)
  }
}

const mapStateToProps = (state) => {
  return {games: state.api}
}

export default connect(mapStateToProps)(MyGames)
