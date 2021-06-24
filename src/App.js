import React from 'react'
import './App.css';
import {connect} from 'react-redux'
import {fetchApi, fetchUsers, fetchBoxes} from './redux/actions.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './containers/Home'
import AccountInfo from './containers/MyAccount/AccountInfo'
import BoxesContainer from './containers/MyAccount/BoxesContainer'
import RecommendationsContainer from './containers/MyAccount/RecommendationsContainer'
import Quiz from './containers/Quiz'
import GamesContainer from './containers/GamesContainer'
import GamesCollection from './containers/MyCollection/GamesCollection'
import NavBar from './components/NavBar/NavBar'
import Signup from './components/Signup'
import Login from './components/Login'
import ThankYou from './components/ThankYou'
import Billing from './components/Billing'


class App extends React.Component {

  render(){
    let loggedIn = this.props.state.loggedin
    return (
      <Router>
        <div>
          <NavBar/>
          <Route exact path= "/" component={Home}/>
          <Route exact path= "/quiz" render ={() => <Quiz/>}/>
          <Route exact path= "/account" render ={() => { return loggedIn? <AccountInfo/> : <Login/>}}/>
          <Route exact path= "/signup" component ={Signup}/>
          <Route exact path= "/login" component ={Login}/>
          <Route exact path= "/boxes" render ={() => { return loggedIn? <BoxesContainer/> : <Login/>}}/>
          <Route exact path= "/collection" render ={() => { return loggedIn? <GamesCollection/> : <Login/>}}/>
          <Route path= "/games" render ={(routerProps) => { return loggedIn? <GamesContainer {...routerProps}/> : <Login/>}}/>
          <Route exact path= "/recommendations" render ={() => { return loggedIn? <RecommendationsContainer/> : <Login/>}}/>
          <Route exact path= "/checkout" render ={() => { return loggedIn? <Billing/> : <Login/>}}/>
          <Route exact path = "/thankyou" component = {ThankYou}/>
        </div>
      </Router>

    )
  }

  componentDidMount(){
    this.props.fetchApi()
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
