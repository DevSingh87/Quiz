/*  ========================================================================
    # Quiz - Interfaces - Props
    ========================================================================  */

export default interface QuizProps {
  handleState(NewState: string, NewScore: number): void;
  DataLoaded?: boolean;
  Data?: any;
  Score?: number;
}
