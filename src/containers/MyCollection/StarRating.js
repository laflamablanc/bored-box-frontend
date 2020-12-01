import React, {useState} from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = (props) => {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  


  const handleClick = (ratingValue) => {
    setRating(ratingValue)
    props.ratingHandler(ratingValue)

  }
  return(

    <div>
      {[...Array(5)].map((star, idx)=>{
        const ratingValue = idx + 1
        return (
          <label>
            <input
              className = "checked"
              type="radio"
              checked
              name="rating"
              value={ratingValue}
              onClick={()=> handleClick(ratingValue)}
            />
            <FaStar
              className = "star"
              color={ratingValue <= (hover || rating) ? "orange" : "gray"}
              size={30}
              onMouseOver={()=>setHover(ratingValue)}
              onMouseOut={()=>setHover(null)}
            />
          </label>
        )

      })}
    </div>
  )
}

export default StarRating
