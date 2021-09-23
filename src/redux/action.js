import { DATA } from '../data';
import { ADD_ERROR, LOAD_ERRORS } from './types';

export const loadErrors = () => {
  return {
    type: LOAD_ERRORS,
    payload: DATA,
  };
};
export const addError = (text) => {
  return {
    type: ADD_ERROR,
    payload: text,
  };
};
