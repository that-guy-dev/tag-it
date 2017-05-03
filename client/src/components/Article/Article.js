import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticle } from '../../actions/article';
import styles from '../../../styles.css';
class Article extends Component {

  componentWillMount = () => {
    const { dispatch, params } = this.props;
    dispatch(fetchArticle(params.id));
  }

  render() {
    const { article } = this.props;

    const html = { __html: article.content };
    const tags = article.tags ? article.tags.map(tag => <span>{tag}  </span>) : '';

    return (
      <div>
        <h2 className="element">{article.title}</h2>
        {article.url}
        <div style={{ paddingTop: 20 }}>
          <span style={{ fontWeight: 'bolder' }}>Tags:</span> {tags} </div>
          <div dangerouslySetInnerHTML={html} />
      </div>
    );
  }
}

Article.propTypes = {
  article: PropTypes.object.isRequired,
  params: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    article: state.article,
  };
}

export default connect(mapStateToProps)(Article);
