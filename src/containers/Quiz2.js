import React from 'react';
import PropTypes from 'prop-types';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import {quizArray} from '../quizArray'


class Quiz extends React.Component {

  submitHandler = () => {
    console.log("Submit")
  }

  render(){
    console.log(quizArray)
    return(
      <div>
        <form class="jotform-form" onSubmit={this.submitHandler} method="post" name="form_203355570677057" id="203355570677057" accept-charset="utf-8" autocomplete="on">
          <div role="main" class="form-all">
            <ul class="form-section page-section">
              <h1 id="header_1" class="form-header" data-component="header">
                Gamer Personality Quiz
              </h1>
              <li class="form-line" data-type="control_checkbox" id="id_4">
                <label class="form-label form-label-top form-label-auto" id="label_4" for="input_4"> Choose Your Favorite Games (Up to 3) </label>
                <div id="cid_4" class="form-input-wide" data-layout="full">
                  <div class="form-multiple-column" data-columncount="2" role="group" aria-labelledby="label_4" data-component="checkbox">
                    <span class="form-checkbox-item">
                      <span class="dragger-item">
                      </span>
                      <input type="checkbox" class="form-checkbox validate[maxselection,minselection]" id="input_4_0" name="q4_chooseYour4[]" value="Ticket To Ride" data-maxselection="3" data-minselection="1" />
                      <label id="label_input_4_0" for="input_4_0"> Ticket To Ride </label>
                    </span>
                    <span class="form-checkbox-item">
                      <span class="dragger-item">
                      </span>
                      <input type="checkbox" class="form-checkbox validate[maxselection,minselection]" id="input_4_1" name="q4_chooseYour4[]" value="Catan" data-maxselection="3" data-minselection="1" />
                      <label id="label_input_4_1" for="input_4_1"> Catan </label>
                    </span>
                    <span class="form-checkbox-item" style="clear:left">
                      <span class="dragger-item">
                      </span>
                      <input type="checkbox" class="form-checkbox validate[maxselection,minselection]" id="input_4_2" name="q4_chooseYour4[]" value="Cards Against Humanity" data-maxselection="3" data-minselection="1" />
                      <label id="label_input_4_2" for="input_4_2"> Cards Against Humanity </label>
                    </span>
                    <span class="form-checkbox-item">
                      <span class="dragger-item">
                      </span>
                      <input type="checkbox" class="form-checkbox validate[maxselection,minselection]" id="input_4_3" name="q4_chooseYour4[]" value="Pictionary" data-maxselection="3" data-minselection="1" />
                      <label id="label_input_4_3" for="input_4_3"> Pictionary </label>
                    </span>
                    <span class="form-checkbox-item" style="clear:left">
                      <span class="dragger-item">
                      </span>
                      <input type="checkbox" class="form-checkbox validate[maxselection,minselection]" id="input_4_4" name="q4_chooseYour4[]" value="Monopoly" data-maxselection="3" data-minselection="1" />
                      <label id="label_input_4_4" for="input_4_4"> Monopoly </label>
                    </span>
                    <span class="form-checkbox-item">
                      <span class="dragger-item">
                      </span>
                      <input type="checkbox" class="form-checkbox validate[maxselection,minselection]" id="input_4_5" name="q4_chooseYour4[]" value="Scattergories" data-maxselection="3" data-minselection="1" />
                      <label id="label_input_4_5" for="input_4_5"> Scattergories </label>
                    </span>
                    <span class="form-checkbox-item" style="clear:left">
                      <span class="dragger-item">
                      </span>
                      <input type="checkbox" class="form-checkbox validate[maxselection,minselection]" id="input_4_6" name="q4_chooseYour4[]" value="Clue" data-maxselection="3" data-minselection="1" />
                      <label id="label_input_4_6" for="input_4_6"> Clue </label>
                    </span>
                    <span class="form-checkbox-item">
                      <span class="dragger-item">
                      </span>
                      <input type="checkbox" class="form-checkbox validate[maxselection,minselection]" id="input_4_7" name="q4_chooseYour4[]" value="Battleships" data-maxselection="3" data-minselection="1" />
                      <label id="label_input_4_7" for="input_4_7"> Battleships </label>
                    </span>
                    <span class="form-checkbox-item" style="clear:left">
                      <span class="dragger-item">
                      </span>
                      <input type="checkbox" class="form-checkbox validate[maxselection,minselection]" id="input_4_8" name="q4_chooseYour4[]" value="Codenames" data-maxselection="3" data-minselection="1" />
                      <label id="label_input_4_8" for="input_4_8"> Codenames </label>
                    </span>
                    <span class="form-checkbox-item">
                      <span class="dragger-item">
                      </span>
                      <input type="checkbox" class="form-checkbox validate[maxselection,minselection]" id="input_4_9" name="q4_chooseYour4[]" value="Pandemic" data-maxselection="3" data-minselection="1" />
                      <label id="label_input_4_9" for="input_4_9"> Pandemic </label>
                    </span>
                  </div>
                </div>
              </li>
              <li class="form-line" data-type="control_radio" id="id_5">
                <label class="form-label form-label-top form-label-auto" id="label_5" for="input_5"> I Usually Play Games </label>
                <div id="cid_5" class="form-input-wide" data-layout="full">
                  <div class="form-single-column" role="group" aria-labelledby="label_5" data-component="radio">
                    <span class="form-radio-item" style="clear:left">
                      <span class="dragger-item">
                      </span>
                      <input type="radio" class="form-radio" id="input_5_0" name="q5_iUsually" value="By Myself or With a Partner (1-2 people)" />
                      <label id="label_input_5_0" for="input_5_0"> By Myself or With a Partner (1-2 people) </label>
                    </span>
                    <span class="form-radio-item" style="clear:left">
                      <span class="dragger-item">
                      </span>
                      <input type="radio" class="form-radio" id="input_5_1" name="q5_iUsually" value="With My Family or Small Groups (3-5 people)" />
                      <label id="label_input_5_1" for="input_5_1"> With My Family or Small Groups (3-5 people) </label>
                    </span>
                    <span class="form-radio-item" style="clear:left">
                      <span class="dragger-item">
                      </span>
                      <input type="radio" class="form-radio" id="input_5_2" name="q5_iUsually" value="In Large Groups (6+ people)" />
                      <label id="label_input_5_2" for="input_5_2"> In Large Groups (6+ people) </label>
                    </span>
                  </div>
                </div>
              </li>
              <li class="form-line" data-type="control_button" id="id_2">
                <div id="cid_2" class="form-input-wide" data-layout="full">
                  <div data-align="auto" class="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField">
                    <button id="input_2" type="submit" class="form-submit-button submit-button jf-form-buttons jsTest-submitField" data-component="button" data-content="">
                      Submit
                    </button>
                  </div>
                </div>
              </li>
              <li style="display:none">
                Should be Empty:
                <input type="text" name="website" value="" />
              </li>
            </ul>
          </div>
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
