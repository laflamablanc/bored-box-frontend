import React from 'react'
import './App.css';
import {connect} from 'react-redux'
import {fetchApi, fetchUsers, fetchBoxes} from './redux/actions.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './containers/Home'
import AccountInfo from './containers/MyAccount/AccountInfo'
import BoxesContainer from './containers/MyAccount/BoxesContainer'
import Quiz from './containers/Quiz'
import GamesContainer from './containers/GamesContainer'
import NavBar from './components/NavBar/NavBar'
import Signup from './components/Signup'
import Login from './components/Login'

class App extends React.Component {

  render(){
    console.log("State after login", this.props.state)
    let loggedIn = this.props.state.loggedin
    return (
      <Router>
        <div>
          <NavBar/>
          <Route exact path= "/" render ={() => { return loggedIn? <Home/> : <Login/>}}/>
          <Route exact path= "/quiz" render ={() => { return loggedIn? <Quiz/> : <Login/>}}/>
          <Route exact path= "/account" render ={() => { return loggedIn? <AccountInfo/> : <Login/>}}/>
          <Route exact path= "/signup" component ={Signup}/>
          <Route exact path= "/login" component ={Login}/>
          <Route exact path= "/boxes" render ={() => { return loggedIn? <BoxesContainer/> : <Login/>}}/>
          <Route exact path= "/games" render ={() => { return loggedIn? <GamesContainer/> : <Login/>}}/>
        </div>
      </Router>

    )
  }

  componentDidMount(){
    this.props.fetchApi()
    // this.props.fetchUsers()
    console.log("App State", this.state)
  }
}

function mapStateToProps(state){
  return {state: state}
}

function mapDispatchToProps(dispatch){
  return{
    fetchApi: () => dispatch(fetchApi()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchBoxes: (user) => dispatch(fetchBoxes(user))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

// {<Router>
//   <Route exact path="/" component ={Home}/>
//   <Route exact path="/quiz" component ={Quiz}/>
//   <Route exact path="/myaccount" component ={MyAccount}/>
// </Router>}
