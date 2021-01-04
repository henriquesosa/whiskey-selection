import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Articles = ({ articles }) => (
  <div className="articles">
    {articles.map((article) => (
      <a
        href={article.url}
        target="_blank"
        className="article"
        alt={article.title}
        key={article.title}
      >
        <img src={`${process.env.PUBLIC_URL}/images/${article.img}`} />
        <div className="article-info">
          <h2>{article.title}</h2>
          <p>{article.teaser}</p>
        </div>
      </a>
    ))}
  </div>
);

Articles.propTypes = {
  articles: PropTypes.array,
}

export default Articles;


// img