import { LOAD_ERRORS, ADD_ERROR } from './types';

const initialState = [];
export const errorsReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case LOAD_ERRORS:
      return [...state, ...action.payload];
    case ADD_ERROR:
      const newError = {
        id: state.length.toString(),
        text: action.payload,
      };
      if (state.length === 1) {
        state[state.length] = newError;
      } else {
        state.splice(1, 0, newError);
      }

      return [...state];
    default:
      return state;
  }
};
