import {
    FETCH_TAG_REQUEST, 
    FETCH_TAG_SUCCESS, 
    FETCH_TAG_FAILURE,
  } from '../constants/ActionTypes';
  
  import update from 'react-addons-update';
  
  const initialState = {
    items: [],
  };
  
  export default function tags(state = initialState, action) {
    switch (action.type) {
        case FETCH_TAG_REQUEST:
        return {
          ...state,
          ...action,
          isFetching: true,
        };
      case FETCH_TAG_SUCCESS:
        return {
          ...state,
          ...action,
          isFetching: false,
          loaded: true,
        };
      case FETCH_TAG_FAILURE:
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
  