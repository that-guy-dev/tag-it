import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import articles from './articles';
import article from './article';

export default combineReducers({
  articles,
  article,
  routing: routerReducer,
});
