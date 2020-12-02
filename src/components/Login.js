import React from 'react'
import {connect} from 'react-redux'
import {getUser, createBox} from '../redux/actions'
import {Link} from 'react-router-dom'

class Login extends React.Component {

  state = {
    username: "",
    password: ""
  }

  localSubmitHandler = (e) => {
    e.preventDefault()
    this.props.getUser()
    this.setState({username: "", password: ""})
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <div className="login-page">
        <div className="login-page-card">
          <img src="/LoginLogoClear.png" alt=""/>
          <h5 className="login-page-header-text login-page-header-text-sm"> Please Login to Continue </h5>
          <form className="login-page-form" onSubmit = {this.localSubmitHandler}>
            <label className="login-page-input-text" for="username">Username:</label><br/>
            <input className="login-page-input" placeholder="username" type="text" id="username" name="username" onChange = {this.handleChange} value={this.state.username}/><br/>
            <label className="login-page-input-text" for="password">Password:</label><br/>
            <input className="login-page-input" placeholder="password" type="password" id="password" name="password" onChange = {this.handleChange} value = {this.state.password}/><br/>
            <input className="login-page-submit" type="submit" id="submit" name="submit"/>
            <br/>
            <Link to="/signup"> Create Account Here </Link>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (newUser)=> dispatch(getUser(newUser)),
    createBox: (newUser)=> dispatch(createBox(newUser))
  }
}


export default connect(null, mapDispatchToProps)(Login)
