import React from 'react';

export const ScrollText = ({ crawl }) => {

  return (
    <div className="ScrollText">
      <p className="crawl">{crawl.crawl}</p>
      <p className="title">{crawl.title}</p>
      <p className="date">{crawl.date}</p>
    </div>
  )
};