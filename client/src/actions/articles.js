import * as types from '../constants/ActionTypes';

function tagArticleRequest(url) {
  return {
    type: types.TAG_ARTICLE_REQUEST,
    url,
  };
}

function tagArticleSuccess(article, articles) {
  return {
    type: types.TAG_ARTICLE_SUCCESS,
    article,
    articles,
  };
}

function tagArticleFailure(error) {
  return {
    type: types.TAG_ARTICLE_FAILURE,
    error,
  };
}

/*export function tagArticle(url) {
  return dispatch => {
    dispatch(tagArticleRequest(url));
    ArticleParser.extract(url).then((article) => {
      dispatch(tagArticleSuccess(article));
    }).catch((error) => {
      dispatch(tagArticleFailure(error));
    });
  };
}*/

export function tagArticle(url) {

  //const body = { url };
  const config = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    //body: JSON.stringify(body),
  };
  const serviceUrl = 'http://localhost:3030/tagArticle';

  return (dispatch, getState) => {
    dispatch(tagArticleRequest(url));
    return fetch(serviceUrl, config)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(article => {
        const articles = getState().articles.items;
        articles.push(article);
        dispatch(tagArticleSuccess(article, articles));
      })
      .catch(error => {
        dispatch(tagArticleFailure(error.message));
      });
  };
}

export function fetchArticles() {

}
