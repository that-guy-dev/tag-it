import React, { PropTypes } from 'react';

const Article = props => {
  const { article, key } = props;
  const html = { __html: article.content };

  return (
    <div style={{ }}>
      <h3>{article.title} {key}</h3>
      <div dangerouslySetInnerHTML={html} />
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
  key: PropTypes.number.isRequired,
};

export default Article;
