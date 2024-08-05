import { useEffect, useState } from "react";
import CommentSection from "./CommentSection";
import { fetchArticleById } from "../../Utils/Api";
import { useParams } from "react-router-dom";
import VoteButtons from "./Tools/VoteButtons";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const [articleDate, setArticleDate] = useState(article.created_at);

  useEffect(() => {
    fetchArticleById(article_id).then((article) => {
      const formattedDate = new Date(article.created_at).toLocaleDateString(
        "en-GB",
        {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }
      );
      setArticleDate(formattedDate);
      setArticle({ ...article, articleDate: articleDate });
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Loading your lovely, lovely content ...</p>;

  return (
    <>
      <div className="border-b border-gray-500 flex flex-col justify-between items-center px-8 my-8">
        <h2 className="font-bold">{article.title}</h2>
        <img src={article.article_img_url} className="m-8 max-w-md" />
        <p className="mt-8">{article.body}</p>
        <p className="mb-8">
          by {article.author} at {articleDate}
        </p>
        <VoteButtons votes={article.votes} />
      </div>
      <CommentSection />
    </>
  );
};

export default SingleArticle;
