import {combineReducers} from 'redux';
import dataReducer from './dataReducer';
import themeReducer from './themeReducer';

export default combineReducers({
  data: dataReducer,
  theme: themeReducer,
});