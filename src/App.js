import React from 'react'
import './App.css';
import {connect} from 'react-redux'
import {fetchApi, fetchUsers} from './redux/actions.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './containers/Home'
import AccountInfo from './containers/MyAccount/AccountInfo'
import MyBox from './containers/MyAccount/MyBox'
import Quiz from './containers/Quiz'
import GamesContainer from './containers/GamesContainer'
import NavBar from './components/NavBar'
import Signup from './components/Signup'

class App extends React.Component {

  render(){
    console.log("State", this.props)
    let gamesArray = this.props.api
    console.log(gamesArray)
    return (
      <Router>
        <div>
          <NavBar/>
          <Route exact path= "/" component ={Home}/>
          <Route exact path= "/quiz" component ={Quiz}/>
          <Route exact path= "/account" component ={AccountInfo}/>
          <Route exact path= "/signup" component ={Signup}/>
          <Route exact path= "/mybox" component ={MyBox}/>
          <Route exact path= "/games" component ={GamesContainer}/>
        </div>
      </Router>

    )
  }

  componentDidMount(){
    this.props.fetchApi()
    this.props.fetchUsers()
  }
}

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return{
    fetchApi: () => dispatch(fetchApi()),
    fetchUsers: () => dispatch(fetchUsers())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

// {<Router>
//   <Route exact path="/" component ={Home}/>
//   <Route exact path="/quiz" component ={Quiz}/>
//   <Route exact path="/myaccount" component ={MyAccount}/>
// </Router>}
