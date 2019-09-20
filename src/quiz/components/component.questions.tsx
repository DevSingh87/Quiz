/*  ========================================================================
    # Quiz - Components - Question
    ========================================================================  */

/**
 * Component for the questions.
 */

/*  Dependencies
    ========================================================================  */

// React
import React, { Component } from 'react';

// Interfaces
import QuizProps from '../interfaces/interfaces.props';
import QuizStates from '../interfaces/interfaces.states';

/*  Class
    ========================================================================  */

class Questions extends Component<QuizProps, QuizStates> {
  constructor(props) {
    super(props);
    this.state = {
      Question: 1,
      OptionSelected: false,
      Score: 0
    };
  }

  CheckAnswer(value: boolean) {
    if (value === true) {
      this.setState(prevState => {
        return {
          Question: prevState.Question + 1,
          OptionSelected: false,
          Score: prevState.Score + 1
        };
      });
    } else if (value === false) {
      this.setState(prevState => {
        return {
          Question: prevState.Question + 1,
          OptionSelected: false
        };
      });
    } else {
      alert('Please select an answer to proceed.');
    }
  }

  render() {
    const CurrentQuestion = this.state.Question;
    const NumberOfQuestions = this.props.Data.length;

    if (this.props.DataLoaded) {
      if (CurrentQuestion <= NumberOfQuestions) {
        return (
          <div className='c-questions'>
            <div className='o-row'>
              <span className='c-questions__current'>
                Question {CurrentQuestion} out of {NumberOfQuestions}
              </span>
              <a
                className='c-questions__reset'
                onClick={() => {
                  return this.props.handleState('Start', 0);
                }}
              >
                Restart
              </a>
            </div>

            <div className='o-row'>
              <div className='o-col--12'>
                <h2>{this.props.Data[this.state.Question - 1]['question']}</h2>
              </div>
            </div>

            <div className='o-row'>
              <div className='o-col--12'>
                <ul className='c-questions__options'>
                  {this.props.Data[this.state.Question - 1]['options'].map(
                    (options: any, index: number) => {
                      console.log(this.state.OptionSelected);
                      return (
                        <li key={index} className='c-questions__options-item'>
                          <label className='c-questions__options-label'>
                            <input
                              type='radio'
                              name='options'
                              checked={this.state.OptionSelected}
                              onChange={() => {
                                return this.setState({
                                  OptionSelected: options.value
                                });
                              }}
                            />
                            <span>{options.content}</span>
                          </label>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>

            <div className='o-row'>
              <div className='o-col--12'>
                <a
                  className='c-quiz__button'
                  onClick={() => {
                    return this.CheckAnswer(this.state.OptionSelected);
                  }}
                >
                  Continue
                </a>
              </div>
            </div>
          </div>
        );
      } else {
        {
          /* If there is no question left, proceed to the result screen. */
        }
        this.props.handleState('End', this.state.Score);
      }
    }
    return (
      <div className='o-row'>
        <div className='o-col--12'>
          <h2>ERROR</h2>
        </div>
      </div>
    );
  }
}

/*  Export
    ========================================================================  */

export default Questions;
