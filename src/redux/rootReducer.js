import { combineReducers } from 'redux'

const defaultState = {
  api: [],
  games: [],
  user: [],
  boxes: [],
  currentBox: [],
  loggedin: false
}

function apiReducer(state = defaultState.api, action){
  switch (action.type){
    case "FETCH_API":
      return action.payload
    default:
      return state
  }
}

function boxesReducer(state = defaultState.boxes, action){
  switch (action.type){

    case "FETCH_BOXES":
      return action.payload
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
  function usersReducer(state = defaultState.user, action){
    switch (action.type){
      case "ADD_USER":
        return action.payload
      case "FETCH_USERS":
        return action.payload
      default:
        return state
    }
  }

  function loginReducer(state = defaultState.loggedin, action){
    switch (action.type){
      case "ADD_USER":
        return true
      default:
        return state
    }
  }

  function currentBoxReducer(state = defaultState.currentBox, action){
    switch (action.type){
      case "CREATE_BOX":
        return action.payload
      case "ADD_GAME_TO_BOX":
        console.log(state)
        return {
          ...state,
          games: [...state.games, action.payload]
        }
      default:
        return state
    }
  }

const rootReducer = combineReducers({
  api: apiReducer,
  // games: gamesReducer,
  user: usersReducer,
  boxes: boxesReducer,
  currentBox: currentBoxReducer,
  loggedin: loginReducer
})



export default rootReducer
