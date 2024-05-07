import ArticlePreviewCard from "./ArticlePreviewCard";
import axios from "axios";
import React, { useState, useEffect } from "react";

const AllArticles = () => {
  const [articlesAll, setArticlesAll] = useState([]);
  React.useEffect(() => {
    axios
      .get("https://nc-news-iweb.onrender.com/api/articles")
      .then(({ data }) => {
        const { articleData } = data;
        setArticlesAll(articleData);
      })
      .catch((err) => {
        Promise.reject(err);
      });
  }, []);

  return (
    <ul>
      {articlesAll.map((article) => (
        <ArticlePreviewCard
          key={article.article_id}
          title={article.title}
          topic={article.topic}
          author={article.author}
          votes={article.votes}
          comment_count={article.comment_count}
          date={article.created_at}
        />
      ))}
    </ul>
  );
};

export default AllArticles;
