import { useEffect, useState } from "react";
import FullArticleCard from "./Cards/FullArticleCard";
import CommentSection from "./CommentSection";
import { fetchArticleById } from "../../Utils/Api";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { article_id }= useParams();

  useEffect(() => {
    fetchArticleById(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false)
    });
  }, []);

  return (
    <>
      <FullArticleCard isLoading={ isLoading } article={ article } />
      <CommentSection article={article} isLoading={ isLoading }/>
    </>
  );
};

export default SingleArticle;
