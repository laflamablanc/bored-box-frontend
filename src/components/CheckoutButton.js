import React from 'react'
import {useHistory} from 'react-router-dom'

const CheckoutButton = (props) => {
  let history = useHistory()

  return(
    <div className="checkout-container">
      <h1> Total Due: ${props.grandTotal} </h1>
      <button onClick = {()=>history.push("/checkout")}> Checkout </button>
    </div>
  )
}

export default CheckoutButton
