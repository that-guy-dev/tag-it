import {
  TAG_ARTICLE, TAG_ARTICLE_SUCCESS, TAG_ARTICLE_FAILURE,
  FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE,
  UPDATE_ARTICLES,
} from '../constants/ActionTypes';

import update from 'react-addons-update';

const initialState = {
  items: [],
};

export default function loans(state = initialState, action) {
  switch (action.type) {
    case TAG_ARTICLE:
      return {
        ...state,
        ...action,
      };
    case TAG_ARTICLE_SUCCESS:
      return {
        ...state,
        ...action,
      };
    case TAG_ARTICLE_FAILURE:
      return {
        ...state,
        ...action,
      };
    case FETCH_ARTICLES:
      return {
        ...state,
        ...action,
        isFetching: true,
      };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        ...action,
        isFetching: false,
        loaded: true,
      };
    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        ...action,
        isFetching: false,
        loaded: true,
      };
    case UPDATE_ARTICLES: {
      return update(state, {
        items: { $push: [action.article] },
      });
    }
    default:
      return state;
  }
}
