import React from 'react'
import {connect} from 'react-redux'

class AccountInfo extends React.Component {
  render(){
    let currentUser = this.props.users[this.props.users.length-1]
    console.log("current user", currentUser)
    return(
      <div>
        <h2> Account Info </h2>
        <div>Name: {currentUser.username}</div><button>Edit Name</button>
        <div>Address: {currentUser.address}</div><button>Edit Address</button>
        <div>Subscription Status: {currentUser.subscribed? "Active" : "Inactive"}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps)(AccountInfo)
