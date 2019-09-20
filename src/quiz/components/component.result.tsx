/*  ========================================================================
    # Quiz - Components - Result
    ========================================================================  */

/**
 * Component for displaying the result.
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

class Result extends Component<QuizProps, QuizStates> {
  render() {
    const NumberOfQuestions = this.props.Data.length;

    if (this.props.Score >= 2) {
      return (
        <div className='c-result'>
          <div className='o-row'>
            <div className='o-col--12'>
              <h2>
                You correctly answered {this.props.Score} out of {NumberOfQuestions}{' '}
                questions.
              </h2>
              <p>You did great!</p>
            </div>
          </div>

          <div className='o-row'>
            <div className='o-col--12'>
              <a
                className='c-quiz__button'
                onClick={() => {
                  return this.props.handleState('Start', 0);
                }}
              >
                Restart
              </a>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='c-result'>
          <div className='o-row'>
            <div className='o-col--12'>
              <h2>
                You correctly answered {this.props.Score} out of {NumberOfQuestions}{' '}
                questions.
              </h2>
              <p>You can do better than that! Try it again.</p>
            </div>
          </div>

          <div className='o-row'>
            <div className='o-col--12'>
              <a
                className='c-quiz__button'
                onClick={() => {
                  return this.props.handleState('Start', 0);
                }}
              >
                Restart
              </a>
            </div>
          </div>
        </div>
      );
    }
  }
}

/*  Export
    ========================================================================  */

export default Result;
