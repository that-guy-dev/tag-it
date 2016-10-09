import React, { PropTypes } from 'react';

const Article = props => {
  const { article, key } = props;
  console.log(props);

  const html = { __html: article.content };

  return (
    <div style={{ }}>
      <h3>{article.title} {key}</h3>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
};

export default Article;
