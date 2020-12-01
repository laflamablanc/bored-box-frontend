import React from 'react'
import {connect} from 'react-redux'
import CollectionGameCard from './CollectionGameCard'
import './GamesCollection.css';
// import Sort from '../components/Sort'



class GamesCollection extends React.Component {

  render(){
    console.log("STATE", this.props.collection)
    let collectionArray = this.props.collection.games
    return(
      <div className="games-container">
        {collectionArray.map(game=> <CollectionGameCard key = {game.id} game={game}/>)}
      </div>)
  }
}

const mapStateToProps = (state) => {
  return {collection: state.collection}
}

export default connect(mapStateToProps)(GamesCollection)
