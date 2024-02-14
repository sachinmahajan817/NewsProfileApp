import React from 'react';

const NewsCard = ({ title, excerpt, thumbnail }) => {
  return (
    <div>
      <img src={thumbnail} alt="Article Thumbnail" />
      <h3>{title}</h3>
      <p>{excerpt}</p>
    </div>
  );
};

export default NewsCard;
