import { combineReducers } from 'redux';
import comments from '../reducers/comments'

const rootReducer = combineReducers({
  comments: (state = []) => state
});

export default rootReducer;
