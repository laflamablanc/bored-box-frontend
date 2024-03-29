import React from 'react'
import {connect} from 'react-redux'
import GameCard from '../components/GameCard'
import GameShow from '../components/GameShow'
import Sort from '../components/Sort'
import Search from '../components/Search'
import { Route, Switch } from 'react-router-dom';



class GamesContainer extends React.Component {

  state = {
    games: this.props.games,
    sorted: null,
    filtered: null,
    searchValue: null
  }

  returnArray = () => {
    if(this.state.sorted === null && this.state.filtered === null) {
      return this.state.games
    } else if (this.state.filtered !== null) {
      return this.state.filtered
    } else {
      return this.state.sorted
    }
  }

  searchGames = (e) => {
    let filteredArray = this.state.games.filter(game => game.name.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({filtered: filteredArray})
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
    } else if (category === "Max-Players"){
      let array = this.state.games.sort(function(a,b){
        return b.players - a.players
      })
      this.setState({sorted: array})
    } else if (category === "Rating"){
      let array = this.state.games.sort(function(a,b){
        return b.rating - a.rating
      })
      this.setState({sorted: array})
    } else if (category === "Popularity"){
      let array = this.state.games.sort(function(a,b){
        return a.rank - b.rank
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
        <Switch>
          <Route path='/games/:id' render={({match})=> {
              let id = parseInt(match.params.id)
              let myGame = gamesArray.find(gme => gme.id === id)
              return (
                <div>
                  <GameShow game = {myGame} userProfile={this.props.user.user_profile}/>
                </div>
              )
            }} />
          <Route path='/games' render={()=>{
              return(
                <div>
                  <div className = "sort-container">
                    <Sort sortGames = {this.sortGames}/>
                    <Search searchValue = {this.state.searchValue} searchGames = {this.searchGames}/>
                  </div>
                  <div className = "games-container">
                    {gamesArray.map(game=> <GameCard key = {game.id} game={game}/>)}
                  </div>
                </div>
              )
            }}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.api,
    user: state.user
  }
}

export default connect(mapStateToProps)(GamesContainer)
