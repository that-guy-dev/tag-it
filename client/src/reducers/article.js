import {
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE,
} from '../constants/ActionTypes';

const initialState = {
  items: [],
};

export default function article(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLE_REQUEST:
      return {
        ...state,
        ...action,
        isFetching: true,
      };
    case FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        ...action,
        isFetching: false,  
        loaded: true,
      };
    case FETCH_ARTICLE_FAILURE:
      return {
        ...state,
        ...action,
        isFetching: false,
        loaded: true,
      };
    default:
      return state;
  }
}
