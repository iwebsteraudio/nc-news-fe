import { useEffect, useState } from "react";
import CommentSection from "./CommentSection";
import { fetchArticleById } from "../../Utils/Api";
import { useParams } from "react-router-dom";
import VoteButtons from "./Tools/VoteButtons";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleById(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading your lovely, lovely content ...</p>;

  return (
    <>
      <div className="article-card">
        <h2>{article.title}</h2>
        <img src={article.img_url} />
        <p>{article.body}</p>
        <p>
          by {article.author} at {article.created_at}
        </p>
        <VoteButtons votes={article.votes} />
      </div>
      <CommentSection article={article} />
    </>
  );
};

export default SingleArticle;
