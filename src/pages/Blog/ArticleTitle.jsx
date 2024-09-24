import React from 'react';

const ArticleTitle = ({ title, date }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p><em>{date}</em></p>
    </div>
  );
};

export default ArticleTitle;
