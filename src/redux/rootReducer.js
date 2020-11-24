import { combineReducers } from 'redux'

const defaultState = {
  api: [],
  games: [],
  user: [],
  boxes: [],
  currentBox: [],
  boxgames: [],
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
    case "GET_USER":
      return action.payload.boxes
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
      case "GET_USER":
        return action.payload
      default:
        return state
    }
  }

  function loginReducer(state = defaultState.loggedin, action){
    switch (action.type){
      case "ADD_USER":
        return true
      case 'GET_USER':
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
      case "GET_USER":
        return {
          ...action.payload.boxes.slice(-1),
          games: action.payload.boxgames
        }
      default:
        return state
    }
  }

  function boxGameReducer(state = defaultState.boxgames, action){
    switch(action.type){
      case "GET_USER":
        return action.payload.boxgames
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
  loggedin: loginReducer,
  boxgames: boxGameReducer
})



export default rootReducer
