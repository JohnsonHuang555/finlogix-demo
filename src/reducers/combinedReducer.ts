import { combineReducers } from 'redux';
import postReducer, { State as PostState } from '../reducers/postReducer';

export type StoreState = {
  post: PostState;
};

export default combineReducers({
  post: postReducer,
});
