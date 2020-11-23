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
        <h2>Gamer Personality Quiz</h2>
        <QuestionCount />
        {quizArray.map(q => {
            return (
            <div>
              <Question content = {q.question}/>
              <ul className="answerOptions">
                {q.choices.map(choice=> <AnswerOption answerContent={choice}/>)}
              </ul>
            </div>
            )
        })}
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
