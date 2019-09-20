/*  ========================================================================
    # Quiz - Interfaces - States
    ========================================================================  */

export default interface QuizStates {
  CurrentState?: string;
  DataLoaded?: boolean;
  Data?: any;
  Question?: number;
  OptionSelected?: boolean;
  Score?: number;
}
