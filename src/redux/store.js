import { combineReducers, createStore } from 'redux';
import { errorsReducer } from './reducer';

const rootReducer = combineReducers({
  errors: errorsReducer,
});
export const store = createStore(rootReducer);
