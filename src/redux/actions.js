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

export function addGameToBox(game, user){
  return function(dispatch){
    console.log("Inside Fetch", game.id, user.id)
    fetch("http://localhost:4000/box_games",{
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify({
        game_id: game.id,
        box_id: user.id
      })
    })
    .then(r=>r.json())
    // .then(game => {
    //   dispatch({
    //     type: "ADD_GAME_TO_BOX",
    //     payload: game
    //   })
    // })
    .then(console.log)
  }
}
