import {
  LOAD_ERRORS,
  ADD_ERROR,
  EDIT_ERROR,
} from './types';

const initialState = [];
export const errorsReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case LOAD_ERRORS:
      return [...state, ...action.payload];
    case ADD_ERROR:
      if (state.length === 1) {
        state[state.length] = action.payload;
      } else {
        state.splice(1, 0, action.payload);
      }

      return [...state];
    case EDIT_ERROR:
      const editedError =
        state[state.length - Number(action.payload.id)];
      editedError.typeOfError = action.payload.text[0];
      editedError.moreOfError = action.payload.text[1];
      editedError.resultOfError = action.payload.text[2];
      state[state.length - Number(action.payload.id)] =
        editedError;
      return [...state];
    default:
      return state;
  }
};
