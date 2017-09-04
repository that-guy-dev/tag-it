import * as types from '../constants/ActionTypes';

function fetchTagRequest() {
  return {
    type: types.FETCH_TAG_REQUEST,
  };
}

function fetchTagSuccess(articles) {
  return {
    type: types.FETCH_TAG_SUCCESS,
    items: articles,
  };
}

function fetchTagFailure(error) {
  return {
    type: types.FETCH_TAG_FAILURE,
    error,
  };
}

export function fetchTags() {
  const config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const serviceUrl = 'http://localhost:3030/articles';

  return (dispatch) => {
    dispatch(fetchTagRequest());
    return fetch(serviceUrl, config)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((tags) => {
        dispatch(fetchTagSuccess(tags));
      })
      .catch((error) => {
        dispatch(fetchTagFailure(error.message));
      });
  };
}