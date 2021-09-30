import { DATA } from '../data';
import {
  ADD_ERROR,
  EDIT_ERROR,
  LOAD_ERRORS,
} from './types';

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
export const editError = (text, id) => {
  return {
    type: EDIT_ERROR,
    payload: { text, id },
  };
};
