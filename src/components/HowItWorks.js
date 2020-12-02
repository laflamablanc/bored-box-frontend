import React, {Component} from 'react'
import { useHistory } from "react-router-dom";
import WorksCard from './WorksCard'

const cardContent = [
  {
    title: 'Choose',
    img: '/Choose.png',
    text: 'Build your BoredBox'
  },
  {
    title: 'Play',
    img: '/Play.png',
    text: 'Enjoy Games and Other Contents'
  },
  {
    title: 'Return',
    img: '/Return.png',
    text: "Easily Return Games You Don't Want"
  }
]

function HowItWorks() {
  const history = useHistory();
  function handleClick() {
      history.push("/quiz");
    }

  return(
    <div className = "">
      <h2> How It Works </h2>
      <div className="how-it-works">
        {cardContent.map(card => <WorksCard card={card}/>)}
      </div>
    </div>
  )
}

export default HowItWorks
