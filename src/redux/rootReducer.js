import { combineReducers } from 'redux'

const defaultState = {
  api: [],
  games: [],
  user: [],
  boxes: [],
  currentBox: [],
  lastBox: [],
  gameRecs: [],
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
        return {
          games: [...state.games, action.game],
          user_games: [...state.user_games, action.user_game]
        }
      case "REMOVE_GAME_FROM_COLLECTION":
        return {
          games: state.games.filter(game => game.id !== action.gameId),
          user_games: state.user_games.filter(user_game => user_game.id !== action.userGameId)
        }
      case "GET_USER":
        return {
          games: action.payload.collection,
          user_games: action.payload.user_games
        }
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

  function lastBoxReducer(state = defaultState.currentBox, action){
    switch (action.type){
      case "CREATE_BOX":
        return action.payload
      case "ADD_GAME_TO_BOX":
        return {
          ...state,
          games: [...state.games, action.payload],
          box_games: [...state.box_games, action.boxgame]
        }
        // case "REMOVE_GAME_FROM_BOX":
        //   return {
        //     ...state,
        //     games: state.games.filter(game => game.id !== action.payload)
        //   }
      case "GET_USER":
        return action.payload.boxes.slice(-2)[0]
      case "RETURN_GAME":
        return {
          ...state,
          games: state.games.filter(game => game.id !== action.gameId)
        }
      default:
        return state
    }
  }

  function gameRecsReducer(state = defaultState.gameRecs, action){
    switch (action.type){
      case "ADD_USER":
        return action.payload
      case "GET_USER":
        return action.payload.game_recs
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
  lastBox: lastBoxReducer,
  gameRecs: gameRecsReducer,
  loggedin: loginReducer,
})



export default rootReducer
