import React, { PropTypes } from 'react';

const Article = props => {
  const { article, key } = props;
  const html = { __html: article.content };

/*  const tags = article.tags.map((a) => {
    return a;
  });*/
  const tags = article.tags ?
    article.tags.map(tag => <span>{tag}, </span>) : '';

  return (
    <div style={{ }}>
      <h3>{article.title}</h3>
      {article.url}
      <div style={{ paddingTop: 20 }}>
        <span style={{ fontWeight: 'bolder' }}>Tags:</span> {tags}
      </div>
      {/* <div dangerouslySetInnerHTML={html} /> */}
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
  key: PropTypes.number.isRequired,
};

export default Article;
