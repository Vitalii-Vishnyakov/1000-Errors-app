import { DATA } from '../data';
import { DB } from '../db';
import {
  ADD_ERROR,
  EDIT_ERROR,
  LOAD_ERRORS,
} from './types';

export const loadErrors = () => {
  return async (dispatch) => {
    const tmpErrors = await DB.getErrors();
    if (tmpErrors.length === 0) {
      await DB.addFirstItem();
      console.log(tmpErrors);
      console.log('Add first item');
    }
    const errors = await DB.getErrors();
    console.log('After add first item ', errors);
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
    newError.id = id;
    dispatch({
      type: ADD_ERROR,
      payload: newError,
    });
  };
};
export const editError = (newErrorData, id) => {
  return async (dispatch) => {
    await DB.updateError(newErrorData, id);
    dispatch({
      type: EDIT_ERROR,
      payload: { newErrorData, id },
    });
  };
};
