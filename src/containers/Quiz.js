import React from 'react';

import {quizArray} from '../quizArray'
import {useHistory} from 'react-router-dom'


const Quiz = () => {
  const history = useHistory()


  const submitHandler = (e) => {
    console.log(e.target)
    e.preventDefault()
    history.push("/recommendations")
  }

    console.log(quizArray)
    return(
      <div className="quiz-container">
        <form onSubmit ={submitHandler}>
          <h1>Gamer Personality Quiz</h1>
          <h2>Choose Your Favorite Games from this list (up to three):</h2>
          <div className="games-section-container">
            <ul className = "games-section">
              <li className = "question">
                <input type="checkbox" class="" id="" name="" value="Ticket To Ride" data-maxselection="3" data-minselection="1" />
                <label id="label_input_4_0" for="input_4_0"> Ticket To Ride </label>
                <br/>
                <img src="/TTR.jpg"/>
              </li>
              <li className = "question">
                <input type="checkbox" class="" id="" name="" value="Catan" data-maxselection="3" data-minselection="1" />
                <label id="label_input_4_0" for="input_4_0"> Catan </label>
                <br/>
                <img src="/Catan.png"/>
              </li>
              <li className = "question">
                <input type="checkbox" class="" id="" name="" value="Cards Against Humanity" data-maxselection="3" data-minselection="1" />
                <label id="label_input_4_0" for="input_4_0"> Cards Against Humanity </label>
                <br/>
                <img src="/CardsAgainst.jpg"/>
              </li>
              <li className = "question">
                <input type="checkbox" class="" id="" name="" value="Pictionary" data-maxselection="3" data-minselection="1" />
                <label id="label_input_4_0" for="input_4_0"> Pictionary </label>
                <br/>
                <img src="/Pictionary.jpg"/>
              </li>
              <li className = "question">
                <input type="checkbox" class="" id="" name="" value="Monopoly" data-maxselection="3" data-minselection="1" />
                <label id="label_input_4_0" for="input_4_0"> Monopoly </label>
                <br/>
                <img src="/Monopoly.jpg"/>
              </li>
            </ul>
            <ul className = "games-section">
              <li className = "question">
                <input type="checkbox" class="" id="" name="" value="Clue" data-maxselection="3" data-minselection="1" />
                <label id="label_input_4_0" for="input_4_0"> Clue </label>
                <br/>
                <img src="/Clue.jpg"/>
              </li>
              <li className = "question">
                <input type="checkbox" class="" id="" name="" value="Codenames" data-maxselection="3" data-minselection="1" />
                <label id="label_input_4_0" for="input_4_0"> Codenames </label>
                <br/>
                <img src="/Codenames.jpg"/>
              </li>
              <li className = "question">
                <input type="checkbox" class="" id="" name="" value="Battleship" data-maxselection="3" data-minselection="1" />
                <label id="label_input_4_0" for="input_4_0"> Battleship </label>
                <br/>
                <img src="/Battleship.jpg"/>
              </li>
              <li className = "question">
                <input type="checkbox" class="" id="" name="" value="Pandemic" data-maxselection="3" data-minselection="1" />
                <label id="label_input_4_0" for="input_4_0"> Pandemic </label>
                <br/>
                <img src="/Pandemic.jpg"/>
              </li>
              <li className = "question">
                <input type="checkbox" class="" id="" name="" value="Scattergories" data-maxselection="3" data-minselection="1" />
                <label id="label_input_4_0" for="input_4_0"> Scattergories </label>
                <br/>
                <img src="/Scattergories.png"/>
              </li>
            </ul>
          </div>
          <h2>I normally play games... :</h2>
          <ul className = "size-section">
            <li className = "question">
              <input type="checkbox" class="" id="" name="" value="small-group" data-maxselection="3" data-minselection="1" />
              <label id="label_input_4_0" for="input_4_0"> Solo or With a Partner (1-2 people) </label>
            </li>
            <li className = "question">
              <input type="checkbox" class="" id="" name="" value="medium-group" data-maxselection="3" data-minselection="1" />
              <label id="label_input_4_0" for="input_4_0"> In a small group or with family (3-5 people) </label>
            </li>
            <li className = "question">
              <input type="checkbox" class="" id="" name="" value="large-group" data-maxselection="3" data-minselection="1" />
              <label id="label_input_4_0" for="input_4_0"> In a game night or party setting (6+ people) </label>
            </li>
          </ul>
          <input type="submit" value="Build My Profile" id="submit"/>
      </form>

      </div>
    )
}

// <ul className="answerOptions">
//   {q.choices.map(choice=> choice)}
// </ul>

// Quiz.propTypes = {
//   answer: PropTypes.string.isRequired,
//   answerOptions: PropTypes.array.isRequired,
//   counter: PropTypes.number.isRequired,
//   question: PropTypes.string.isRequired,
//   questionId: PropTypes.number.isRequired,
//   questionTotal: PropTypes.number.isRequired,
//   onAnswerSelected: PropTypes.func.isRequired
// };

export default Quiz
