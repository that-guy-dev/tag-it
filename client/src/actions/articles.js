import * as types from '../constants/ActionTypes';

function tagArticleRequest(url) {
  return {
    type: types.TAG_ARTICLE_REQUEST,
    url,
  };
}

function tagArticleSuccess(article) {
  return {
    type: types.TAG_ARTICLE_SUCCESS,
    article,
  };
}

function tagArticleFailure(error) {
  return {
    type: types.TAG_ARTICLE_FAILURE,
    error,
  };
}

export function tagArticle(url) {

  const body = { url };
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };

  return dispatch => {
    dispatch(tagArticleRequest(url));
    return fetch('http:/localhost:3030/tagArticle', config)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(tagArticleSuccess());
      })
      .catch(error => {
        dispatch(tagArticleFailure(error.message));
      });
  };
}

export function fetchArticles() {

}
