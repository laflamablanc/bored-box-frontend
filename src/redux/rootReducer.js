import { combineReducers } from 'redux'

const defaultState = {
  api: [],
  games: [],
  users: [],
  box: []
}

function apiReducer(state = defaultState.api, action){
  switch (action.type){
    case "FETCH_API":
      return action.payload
    default:
      return state
  }
}

function boxReducer(state = defaultState.box, action){
  switch (action.type){
    case "ADD_GAME_TO_BOX":
      return [...this.state.box, action.payload]
    default:
      return state
  }
}

  // function gamesReducer(state = defaultState.games, action){
  //   switch (action.type){
  //     case "ADD_GAME":
  //       console.log("adding games")
  //       return {}
  //     default:
  //       return state
  //   }
  // }
  //
  function usersReducer(state = defaultState.users, action){
    switch (action.type){
      case "ADD_USER":
        console.log("adding user")
        return [...state, action.payload]
      case "FETCH_USERS":
        console.log("fetching users")
        return action.payload
      default:
        return state
    }
  }

const rootReducer = combineReducers({
  api: apiReducer,
  // games: gamesReducer,
  users: usersReducer
})



export default rootReducer
