import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { fetchArticles } from '../actions/articles';

class Articles extends Component {

  componentWillMount = () => {
    const { dispatch } = this.props;
    dispatch(fetchArticles());
  }

  openArticle = (e, article) => {
    browserHistory.push(`${'/article/'}${article['_id']}`);
  }

  render() {
    const articles = this.props.articles.map((article, i) => (
      <div
        onClick={e => this.openArticle(e, article)}
        style={{ fontSize: 16, fontWeight: 'bolder', cursor: 'pointer', paddingTop: 16 }}
        key={i}
      >
        {article.title}
      </div>
    ));

    return (
      <div>
        {articles}
      </div>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    articles: state.articles.items,
  };
}

export default connect(mapStateToProps)(Articles);
