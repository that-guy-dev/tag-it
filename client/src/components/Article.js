import React, { PropTypes } from 'react';

const Article = props => {
  const { article } = props;

  const html = { __html: article.content };

  return (
    <div style={{ }}>
      <h3>{article.title}</h3>
      <div dangerouslySetInnerHTML={html} />
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
};

export default Article;
