import { DATA } from '../data';
import { LOAD_ERRORS } from './types';

export const loadErrors = () => {
  return {
    type: LOAD_ERRORS,
    payload: DATA,
  };
};
