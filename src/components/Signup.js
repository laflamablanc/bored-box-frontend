import React from 'react'
import {connect} from 'react-redux'
import {createUser, createBox} from '../redux/actions'
import {Link, Redirect} from 'react-router-dom'

class Signup extends React.Component {

  state = {
    email: "",
    username: "",
    password: "",
    name: "",
    zip: "",
    subscribed: false,
    board_score: 0,
    card_score: 0,
    party_score: 0,
    fantasy_score: 0,
    economic_score: 0,
    territory_score: 0,
    players_score: 0
  }

  localSubmitHandler = (e) => {
    e.preventDefault()
    this.props.createUser(this.state)
    this.setState({username: "", password: "", name: "", zip: ""})
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    console.log("Logged In:", this.props.loggedin)
    return(
      <React.Fragment>
        {this.props.loggedin ?
          <Redirect to="/"/>
            :
            <div className="login-page">
              <div className="login-page-card">
                <img src="/LoginLogoClear.png" alt=""/>
                <h5 className="login-page-header-text login-page-header-text-sm"> Please Register Below: </h5>
                <form className="login-page-form" onSubmit = {this.localSubmitHandler}>
                  <input className="login-page-input" placeholder="Email Address (Will become your username)" type="text" id="username" name="username" onChange = {this.handleChange} value={this.state.username}/><br/>

                  <input className="login-page-input" placeholder="Password" type="password" id="password" name="password" onChange = {this.handleChange} value = {this.state.password}/><br/>

                  <input className="login-page-input" placeholder="Full Name" type="name" id="name" name="name" onChange = {this.handleChange} value = {this.state.name}/><br/>

                  <input className="login-page-input" placeholder="Zip Code (US Only) *Verify we can ship to you*" type="zip" id="zip" name="zip" onChange = {this.handleChange} value = {this.state.zip}/><br/>

                  <input className="login-page-submit" type="submit" id="submit" name="submit"/>
                  <br/>
                  <Link to="/login"> Already have an account? </Link>
                </form>
              </div>
            </div>
        }
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (newUser)=> dispatch(createUser(newUser)),
    createBox: (newUser)=> dispatch(createBox(newUser))
  }
}

const mapStateToProps = (state) => {
  return {loggedin: state.loggedin}
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup)
