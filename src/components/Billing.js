import React from 'react'
import {useHistory} from 'react-router-dom'

const Billing = () => {
  const history = useHistory()
    return (
      <div className="billing">
      <form onSubmit = {()=>history.push("/thankyou/")}>
        <div>
          <h2> Shipping Adddress </h2>
          <div className = "billing-section">
            <label>
              First Name:
              <input type="text" name="name" />
            </label>
            <label>
              Last Name:
              <input type="text" name="name" />
            </label>
          </div>
          <div className = "billing-section">
            <label>
            Street Address:
            <input type="text" name="name" />
            </label>
            <label>
            City:
            <input type="text" name="name" />
            </label>
            <label>
            State:
            <select>
            <option value = "New Jersey"> New Jersey </option>
            <option value = "New York"> New York </option>
            <option value = "Connecticut"> Connecticut </option>
            <option value = "Texas"> Texas </option>
            <option value = "Massachussets"> Massachussets </option>
            <option value = "Vermont"> Vermont </option>
            <option value = "Tennessee"> Tennessee </option>
            <option value = "Alabama"> Alabama </option>
            <option value = "Alaska"> Alaska </option>
            <option value = "Arkansas"> Arkansas </option>
            <option value = "Colorado"> Colorado </option>
            </select>
            </label>
          </div>
        </div>
        <div >
          <h2> Payment Info </h2>
          <div className = "billing-section">
            <label>
              Card Number:
              <input type="text" name="name" />
            </label>
          </div>
          <div className = "billing-section">
            <label>
              Name on card:
              <input type="text" name="name" />
            </label>
          </div>
          <div className = "billing-section">
            <label>
              Expiration:
              <input type="text" name="name" />
            </label>
            </div>
            <div className = "billing-section">  
            <label>
              Security Code:
              <input type="text" name="name" />
            </label>
          </div>
        </div>
        <input className="billing-button" type="submit" value="Pay Now" />
      </form>
      </div>
    )
}

export default Billing
