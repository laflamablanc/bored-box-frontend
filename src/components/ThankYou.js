import React from 'react'

const ThankYou = () => {
  return(
    <div>
      <h2> Thank You for the Order! </h2>
      <h3> Your Order Number is #101{Math.floor(Math.random() * 100)} </h3>
    </div>
  )
}

export default ThankYou
