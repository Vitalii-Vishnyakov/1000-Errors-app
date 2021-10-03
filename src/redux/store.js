import {
  combineReducers,
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { errorsReducer } from './reducer';

const rootReducer = combineReducers({
  errors: errorsReducer,
});
export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
