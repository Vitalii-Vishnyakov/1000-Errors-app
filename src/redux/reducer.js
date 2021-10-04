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
      state.push(action.payload);
      return [...state];
    case EDIT_ERROR:
      const editedError = state[Number(action.payload.id)];
      editedError.typeOfError =
        action.payload.newErrorData[0];
      editedError.moreOfError =
        action.payload.newErrorData[1];
      editedError.resultOfError =
        action.payload.newErrorData[2];
      state[Number(action.payload.id)] = editedError;
      return [...state];
    default:
      return state;
  }
};
