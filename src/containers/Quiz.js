import React from 'react';
import PropTypes from 'prop-types';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import {quizArray} from '../quizArray'


class Quiz extends React.Component {

  // renderAnswerOptions = (key) => {
  //   return (
  //     <AnswerOption
  //       key={key.content}
  //       answerContent={key.content}
  //       answerType={key.type}
  //       answer={props.answer}
  //       questionId={props.questionId}
  //       onAnswerSelected={props.onAnswerSelected}
  //     />
  //   );
  // }

  render(){
    console.log(quizArray)
    return(
      <div>
        <form>
          <h2>Gamer Personality Quiz</h2>
          <ul className = "games-section">
            <li>
              <input type="checkbox" class="" id="" name="" value="Ticket To Ride" data-maxselection="3" data-minselection="1" />
              <img src="/TTR.jpg"/>
              <label id="label_input_4_0" for="input_4_0"> Ticket To Ride </label>
            </li>
            <li>
              <input type="checkbox" class="" id="" name="" value="Catan" data-maxselection="3" data-minselection="1" />
              <img src="/Catan.png"/>
              <label id="label_input_4_0" for="input_4_0"> Catan </label>
            </li>
            <li>
              <input type="checkbox" class="" id="" name="" value="Cards Against Humanity" data-maxselection="3" data-minselection="1" />
              <img src="/CardsAgainst.jpg"/>
              <label id="label_input_4_0" for="input_4_0"> Cards Against Humanity </label>
            </li>
            <li>
              <input type="checkbox" class="" id="" name="" value="Pictionary" data-maxselection="3" data-minselection="1" />
              <img src="/Pictionary.jpg"/>
              <label id="label_input_4_0" for="input_4_0"> Pictionary </label>
            </li>
            <li>
              <input type="checkbox" class="" id="" name="" value="Monopoly" data-maxselection="3" data-minselection="1" />
              <img src="/Monopoly.jpg"/>
              <label id="label_input_4_0" for="input_4_0"> Monopoly </label>
            </li>
            <li>
              <input type="checkbox" class="" id="" name="" value="Clue" data-maxselection="3" data-minselection="1" />
              <img src="/Clue.jpg"/>
              <label id="label_input_4_0" for="input_4_0"> Clue </label>
            </li>
            <li>
              <input type="checkbox" class="" id="" name="" value="Codenames" data-maxselection="3" data-minselection="1" />
              <img src="/Codenames.jpg"/>
              <label id="label_input_4_0" for="input_4_0"> Codenames </label>
            </li>
            <li>
              <input type="checkbox" class="" id="" name="" value="Battleship" data-maxselection="3" data-minselection="1" />
              <img src="/Battleship.jpg"/>
              <label id="label_input_4_0" for="input_4_0"> Battleship </label>
            </li>
            <li>
              <input type="checkbox" class="" id="" name="" value="Pandemic" data-maxselection="3" data-minselection="1" />
              <img src="/Pandemic.jpg"/>
              <label id="label_input_4_0" for="input_4_0"> Pandemic </label>
            </li>
            <li>
              <input type="checkbox" class="" id="" name="" value="Scattergories" data-maxselection="3" data-minselection="1" />
              <img src="/Scattergories.png"/>
              <label id="label_input_4_0" for="input_4_0"> Scattergories </label>
            </li>
          </ul>
      </form>

      </div>
    )
  }
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
