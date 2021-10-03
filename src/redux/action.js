import { DATA } from '../data';
import { DB } from '../db';
import {
  ADD_ERROR,
  EDIT_ERROR,
  LOAD_ERRORS,
} from './types';

export const loadErrors = () => {
  return async (dispatch) => {
    const errors = await DB.getErrors();
    dispatch({
      type: LOAD_ERRORS,
      payload: errors,
    });
  };
};
export const addError = (text) => {
  return async (dispatch) => {
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
      id: '',
      time: time,
      typeOfError: text[0],
      moreOfError: text[1],
      resultOfError: text[2],
      howToFix: '',
    };

    const id = await DB.createError(newError);
    newError.id = id.toString();
    dispatch({
      type: ADD_ERROR,
      payload: newError,
    });
  };
};
export const editError = (text, id) => {
  return {
    type: EDIT_ERROR,
    payload: { text, id },
  };
};
