import React from 'react'
import {connect} from 'react-redux'

class MyBox extends React.Component {
  render(){
    return(<div>My Box</div>)
  }
}

const mapStateToProps = (state) => {
  return
}


export default connect()(MyBox)
