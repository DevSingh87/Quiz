/*  ========================================================================
    # Quiz
    ========================================================================  */

/**
 * React App for a quiz.
 */

/*  Dependencies
    ========================================================================  */

// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Components
import DataFile from './data';
import Intro from './components/component.intro';
import Questions from './components/component.questions';
import Result from './components/component.result';

// Interfaces
import QuizStates from './interfaces/interfaces.states';

/*  App
    ========================================================================  */

class Quiz extends Component<{}, QuizStates> {
  constructor(props) {
    super(props);
    this.state = {
      CurrentState: 'Start',
      DataLoaded: false,
      Data: [],
      Score: 0
    };
    this.handleState = this.handleState.bind(this);
  }

  componentDidMount() {
    this.setState({
      DataLoaded: true,
      Data: DataFile
    });
  }

  handleState(NewState: string, NewScore = 0) {
    this.setState({ CurrentState: NewState, Score: NewScore });
  }

  render() {
    if (this.state.CurrentState === 'Start')
      return <Intro handleState={this.handleState} />;
    if (this.state.CurrentState === 'Running')
      return (
        <Questions
          handleState={this.handleState}
          DataLoaded={this.state.DataLoaded}
          Data={this.state.Data}
        />
      );
    if (this.state.CurrentState === 'End')
      return (
        <Result
          handleState={this.handleState}
          Data={this.state.Data}
          Score={this.state.Score}
        />
      );
    else
      return (
        <div className='o-row'>
          <div className='o-col--12'>
            <h2>ERROR</h2>
          </div>
        </div>
      );
  }
}

/*  Render
    ========================================================================  */

const RootElement = document.getElementById('quiz');
ReactDOM.render(<Quiz />, RootElement);
