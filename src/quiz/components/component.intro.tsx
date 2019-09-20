/*  ========================================================================
    # Quiz - Components - Intro
    ========================================================================  */

/**
 * Component for the intro.
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

class Intro extends Component<QuizProps, QuizStates> {
  render() {
    return (
      <div className='c-intro'>
        <div className='o-row'>
          <div className='o-col--12'>
            <h2>Welcome</h2>
            <p>Here is a little quiz to test your knowledge, have fun!</p>
            <p>
              <strong>Currently in development!</strong>
            </p>
          </div>
        </div>

        <div className='o-row'>
          <div className='o-col--12'>
            <a
              className='c-quiz__button'
              onClick={() => {
                return this.props.handleState('Running', 0);
              }}
            >
              Start Quiz
            </a>
          </div>
        </div>
      </div>
    );
  }
}

/*  Export
    ========================================================================  */

export default Intro;
