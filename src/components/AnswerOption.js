import React from 'react'
import PropTypes from 'prop-types'

function AnswerOption(props) {
  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={true/*props.answerType === props.answer*/}
        id={1/*props.answerType*/}
        value={"string"/*props.answerType*/}
        disabled={1/*props.answer*/}
        onChange={1/*props.onAnswerSelected*/}
      />
      <label className="radioCustomLabel" htmlFor={1/*props.answerType*/}>
        {props.answerContent}
      </label>
    </li>
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
