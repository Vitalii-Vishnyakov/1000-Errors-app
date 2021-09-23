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
      let newError = {
        id: state.length.toString(),
        text: action.payload,
      };

      return [...state, newError];
    default:
      return state;
  }
};
