import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArticlePreviewCard = ({ article }) => {

  const [articleDate, setArticleDate] = useState(article.created_at)
  useEffect(()=>{
    const formattedDate = new Date(article.created_at).toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }
    );
    setArticleDate(formattedDate)

  }, [])

  return (
    <div className="article-preview-container flex flex-col border-b border-gray-500 p-8">
      <section>
        <Link to={{pathname: `/articles/${article.article_id}` }}>
          <h2 className="font-sans font-bold">{article.title}</h2>
        </Link>

        <img src={article.article_img_url} className="mx-auto" />
        <h3>
          by {article.author} in {article.topic}
        </h3>
      </section>

      <section className="foot-content">
        <p>{article.comment_count} comments</p>
        <p>{articleDate}</p>
        <p>{article.votes} votes</p>
      </section>
    </div>
  );
};

export default ArticlePreviewCard;
