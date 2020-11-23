import React from 'react'
import {connect} from 'react-redux'

class MyAccount extends React.Component {
  render(){
    return(
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return 1
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount)
