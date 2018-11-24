import { combineReducers } from 'redux';

import connection from "./connection";
import timer from "./timer";

export default combineReducers({
  connection,
  timer
});