import {combineReducers} from '../../node_modules/redux';
import MainReducer from './MainReducer';

const appReducer = combineReducers({
  main: MainReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
