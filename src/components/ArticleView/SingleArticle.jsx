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
      <div className="border-b border-gray-500 flex flex-col justify-between items-center px-8 my-8">
        <h2>{article.title}</h2>
        <img src={article.article_img_url} className="m-8 max-w-md"/>
        <p>{article.body}</p>
        <p>
          by {article.author} at {article.created_at}
        </p>
        <VoteButtons votes={article.votes} />
      </div>
      <CommentSection article={article}/>
    </>
  );
};

export default SingleArticle;
