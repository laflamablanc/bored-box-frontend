import React from 'react'
import {connect} from 'react-redux'

class AccountInfo extends React.Component {
  render(){
    console.log(this.props)
    let currentUser = this.props.user
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
  return {user: state.user}
}

export default connect(mapStateToProps)(AccountInfo)
