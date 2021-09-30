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
      let data = new Date();
      const time =
        data.getDate().toString() +
        '/' +
        (data.getMonth() + 1).toString() +
        '/' +
        data.getFullYear().toString() +
        ' ' +
        data.getHours().toString() +
        ':' +
        data.getMinutes().toString();

      const newError = {
        id: state.length.toString(),
        time: time,
        typeOfError: action.payload[0],
        moreOfError: action.payload[1],
        resultOfError: action.payload[2],
      };
      if (state.length === 1) {
        state[state.length] = newError;
      } else {
        state.splice(1, 0, newError);
      }

      return [...state];
    case EDIT_ERROR:
      console.log(action.payload.id);

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
