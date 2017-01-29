import * as types from '../constants/ActionTypes';

function fetchArticlesRequest() {
  return {
    type: types.FETCH_ARTICLES_REQUEST,
  };
}

function fetchArticlesSuccess(articles) {
  return {
    type: types.FETCH_ARTICLES_SUCCESS,
    items: articles,
  };
}

function fetchArticlesFailure(error) {
  return {
    type: types.FETCH_ARTICLES_FAILURE,
    error,
  };
}

export function fetchArticles() {
  const config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const serviceUrl = 'http://localhost:3030/articles';

  return (dispatch) => {
    dispatch(fetchArticlesRequest());
    return fetch(serviceUrl, config)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((articles) => {
        dispatch(fetchArticlesSuccess(articles));
      })
      .catch((error) => {
        dispatch(fetchArticlesFailure(error.message));
      });
  };
}

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

function updateArticles(article){
  return {
    type: types.UPDATE_ARTICLES,
    article,
  };
}

export function tagArticle(url) {

  const body = { articleUrl: url };
  const config = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  const serviceUrl = 'http://localhost:3030/tagArticle';

  return (dispatch, getState) => {
    dispatch(tagArticleRequest(url));
    return fetch(serviceUrl, config)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((article) => {
        dispatch(tagArticleSuccess(article));
        dispatch(fetchArticles());
        //const articles = getState().articles.items;
        //articles.push(article);
        //dispatch(updateArticles(article));
      })
      .catch((error) => {
        dispatch(tagArticleFailure(error.message));
      });
  };
}
