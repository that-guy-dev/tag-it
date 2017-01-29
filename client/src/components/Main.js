import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { tagArticle, fetchArticles } from '../actions/articles';

class Main extends Component {

  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(fetchArticles());
  }

  tag = () => {
    const { dispatch } = this.props;
    const url = this.refs.url.value;
    dispatch(tagArticle(url));
  }

  openArticle = (e, article) => {
    browserHistory.push(`${'/article/'}${article['_id']}`);
  }

  render() {

    const articles = this.props.articles.map((article, i) => (
      <div onClick={e => this.openArticle(e, article)} style={{ fontSize: 16, fontWeight: 'bolder', cursor: 'pointer', paddingTop: 16 }} key={i}>
        {article.title}
      </div>
    ));

    return (
      <div>
        <h2>Tag it</h2>
        <div>
          {articles}
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  articles: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    articles: state.articles.items,
  };
}

export default connect(mapStateToProps)(Main);
