import React, {useState} from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = () => {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

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
              onClick={()=>setRating(ratingValue)}
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
