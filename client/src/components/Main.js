import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { tagArticle, fetchArticles } from '../actions/articles';
import Article from './Article';

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

  openArticle = (id) => {
    console.log(id);
  }

  render() {

    const articles = this.props.articles.map((article, i) => (
      <Article index={i} article={article} key={i} />
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
