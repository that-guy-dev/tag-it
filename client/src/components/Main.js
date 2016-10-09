import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { tagArticle } from '../actions/articles';
import Article from './Article';

class Main extends Component {

  tag = () => {
    const { dispatch } = this.props;
    const url = this.refs.url.value;
    console.log(url);
    dispatch(tagArticle(url));
  }

  render() {

    const articles = this.props.articles.map((article, i) => (
      <Article index={i} article={article} />
    ));

    return (
      <div>
        <h2>Tag it</h2>
        <div>
          Url: <input type="text" name="url" ref="url" />
          <button onClick={e => this.tag(e)}>TAG</button>
        </div>
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
  }
}

export default connect(mapStateToProps)(Main);
