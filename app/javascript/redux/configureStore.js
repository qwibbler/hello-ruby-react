import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import messageReducer, { fetchmessage } from './Messages/messages';

const reducer = combineReducers({
  messageReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

store.dispatch(fetchmessage());
export default store;