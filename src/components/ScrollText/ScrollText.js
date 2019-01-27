import React from 'react';

export const ScrollText = ({ crawl }) => {

  return (
    <div className="ScrollText">
      <p className="crawl">{crawl.crawl}</p>
      <span className="movie-title">{crawl.title}, </span>
      <span className="date">{crawl.date}</span>
    </div>
  )
};