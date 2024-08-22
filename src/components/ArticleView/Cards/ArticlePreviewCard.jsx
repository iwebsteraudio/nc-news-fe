import { useState } from "react";
import { Link } from "react-router-dom";

const ArticlePreviewCard = ({ article }) => {
  const [articleDate, setArticleDate] = useState(article.created_at);
  

  return (
    <div className="article-preview-container flex flex-col border-b border-gray-500 p-8">
      <section>
        <Link to={{ pathname: `/articles/${article.article_id}` }}>
          <h2 className="font-sans font-bold">{article.title}</h2>
        </Link>

      </section>
      <section className="foot-content">
        <p>{article.comment_count} comments</p>
        <p>{article.votes} votes</p>
      </section>
        <img src={article.article_img_url} className="mx-auto" />
    
    
    </div>
  );
};

export default ArticlePreviewCard;
