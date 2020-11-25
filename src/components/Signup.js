import React from 'react'
import {connect} from 'react-redux'
import {createUser, createBox} from '../redux/actions'
import {Link} from 'react-router-dom'

class Signup extends React.Component {

  state = {
    username: "",
    password: ""
  }

  localSubmitHandler = (e) => {
    e.preventDefault()
    this.props.createUser(this.state)
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
        <h2 className="login-page-header-text login-page-header-text-lg"> Welcome to BoredBox! </h2>
        <h5 className="login-page-header-text login-page-header-text-sm"> Please Signup to Continue </h5>
        <form className="login-page-form" onSubmit = {this.localSubmitHandler}>
          <label className="login-page-header-text" for="name">Full Name:</label><br/>
          <input type="text" id="name" name="name" onChange = {this.handleChange} value={this.state.username}/><br/>
            <label className="login-page-header-text" for="username">Username:</label><br/>
            <input type="text" id="username" name="username" onChange = {this.handleChange} value={this.state.username}/><br/>
            <label className="login-page-header-text" for="password">Password:</label><br/>
            <input type="password" id="password" name="password" onChange = {this.handleChange} value = {this.state.password}/><br/>
            <input className="login-page-submit" type="submit" id="submit" name="submit"/>
        </form>
      <br/>
        <Link to="/login"> Already have an account? </Link>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (newUser)=> dispatch(createUser(newUser)),
    createBox: (newUser)=> dispatch(createBox(newUser))
  }
}


export default connect(null, mapDispatchToProps)(Signup)
