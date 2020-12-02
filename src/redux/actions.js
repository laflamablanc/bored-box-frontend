export function fetchApi(){
  return function(dispatch){
    fetch("http://localhost:4000/games")
    .then(r=>r.json())
    .then(games => {
      dispatch({
        type: "FETCH_API",
        payload: games
      })
    })
  }
}

export function fetchUsers(){
  return function(dispatch){
    fetch("http://localhost:4000/users")
    .then(r=>r.json())
    .then(users => {
      dispatch({
        type: "FETCH_USERS",
        payload: users
      })
    })
  }
}

export function fetchBoxes(user){
  return function(dispatch){
    fetch("http://localhost:4000/users/" + user.id)
    .then(r=>r.json())
    .then(console.log)
    // .then(user => {
    //   dispatch({
    //     type: "FETCH_BOXES",
    //     payload: user.boxes
    //   })
    // })
  }
}

export function createUser(newUser){
  return function(dispatch){
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify(newUser)
    })
    .then(r=>r.json())
    .then(user => {
      dispatch({
        type: "ADD_USER",
        payload: user
      })
    })
    .catch(console.log)
  }
}

export function getUser(){
  return function(dispatch){
    fetch("http://localhost:4000/users/1")
    .then(r=>r.json())
    .then(user => {
      dispatch({
        type: "GET_USER",
        payload: user
      })
    })
    .catch(console.log)
  }
}

export function createBox(user){
  return function(dispatch){
    fetch("http://localhost:4000/boxes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify({
        user_id: user.id
      })
    })
    .then(r=>r.json())
    .then(box=>{
      dispatch({
        type: "CREATE_BOX",
        payload: box
      })
    })
  }
}

export function addGameToBox(game, currentBox){
  return function(dispatch){
    console.log("Inside Fetch", "Game", game.id, "CurrentBox", currentBox)
    fetch("http://localhost:4000/box_games",{
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify({
        game_id: game.id,
        box_id: currentBox.id
      })
    })
    .then(r=>r.json())
    .then(boxgame => {
      dispatch({
        type: "ADD_GAME_TO_BOX",
        payload: game,
        boxgame: boxgame
      })
    })
  }
}

export function removeGameFromBox(boxGameId, gameId){
  console.log("Removing:", boxGameId)
  return function(dispatch){
    fetch("http://localhost:4000/box_games/" + boxGameId, {method: "DELETE"})
    .then(r=>r.json())
    .then(boxgame => {
      dispatch({
        type: "REMOVE_GAME_FROM_BOX",
        game: gameId
      })
    })
  }
}

export function addGameCollection(userId, game){
  console.log("ADDING GAME TO COLLECTION", userId, game.id)
  return function(dispatch){
    fetch("http://localhost:4000/user_games", {
      method: "POST",
      headers: {
        "accepts": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        user_id: userId,
        game_id: game.id
      })
    })
    .then(r=>r.json())
    .then(usergame => {
      dispatch({
        type: "ADD_GAME_TO_COLLECTION",
        user_game: usergame,
        game: game
      })
    })
  }
}

export function removeGameFromCollection(userGameId, gameId){
  console.log("Removing:", userGameId)
  return function(dispatch){
    fetch("http://localhost:4000/user_games/" + userGameId, {method: "DELETE"})
    .then(r=>r.json())
    .then(usergame => {
      dispatch({
        type: "REMOVE_GAME_FROM_COLLECTION",
        gameId: gameId,
        userGameId: userGameId
      })
    })
  }
}

export function rateGame(rating, userGameId){
  console.log("RATING INSIDE FETCH", rating)
  return function(dispatch){
    fetch("http://localhost:4000/user_games/" + userGameId,{
      method: "PATCH",
      headers: {
        "accept": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({rating: rating})
    })
    .then(r=>r.json())
    .then(game => console.log("rate game", game))
  }
}

export function returnGame(gameId){
  return {
    type: "RETURN_GAME",
    gameId: gameId
  }
}
