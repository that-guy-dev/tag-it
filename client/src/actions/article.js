import * as types from '../constants/ActionTypes';

function fetchArticleRequest(id) {
  return {
    type: types.FETCH_ARTICLE_REQUEST,
    id,
  };
}

function fetchArticleSuccess(article) {
  return {
    type: types.FETCH_ARTICLE_SUCCESS,
    ...article,
  };
}

function fetchArticleFailure(error) {
  return {
    type: types.FETCH_ARTICLE_FAILURE,
    error,
  };
}

export function fetchArticle(id) {
  const config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  const serviceUrl = `${'http://localhost:3030/article/'}${id}`;

  return (dispatch) => {
    dispatch(fetchArticleRequest(id));
    return fetch(serviceUrl, config)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((article) => {
        dispatch(fetchArticleSuccess(article));
      })
      .catch((error) => {
        dispatch(fetchArticleFailure(error.message));
      });
  };
}
