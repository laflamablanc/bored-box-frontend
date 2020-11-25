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
    case "GET_USER":
      return action.payload.boxes
    default:
      return state
  }
}

  function collectionReducer(state = defaultState.games, action){
    switch (action.type){
      case "ADD_GAME_TO_COLLECTION":
        console.log("adding games")
        return {}
      default:
        return state
    }
  }

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
        return {
          ...state,
          games: [...state.games, action.payload],
          box_games: [...state.box_games, action.boxgame]
        }
        case "REMOVE_GAME_FROM_BOX":
          return {
            ...state,
            games: state.games.filter(game => game.id !== action.payload)
          }
      case "GET_USER":
        return action.payload.boxes.slice(-1)[0]
      default:
        return state
    }
  }


const rootReducer = combineReducers({
  api: apiReducer,
  collection: collectionReducer,
  user: usersReducer,
  boxes: boxesReducer,
  currentBox: currentBoxReducer,
  loggedin: loginReducer,
})



export default rootReducer
