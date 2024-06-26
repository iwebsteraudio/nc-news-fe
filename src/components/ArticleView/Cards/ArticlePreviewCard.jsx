import { Link } from "react-router-dom";

const ArticlePreviewCard = ({ article }) => {
  return (
    <div className="article-preview-container flex flex-col border-b border-gray-500 p-8">
      <section>
        <Link to={`/articles/${article.article_id}`}>
          <h2>{article.title}</h2>
          <img src={article.article_img_url} className="items-center" />
          <h3>
            by {article.author} in {article.topic}
          </h3>
        </Link>
      </section>

      <section className="foot-content">
        <p>{article.comment_count} comments</p>
        <p>{article.date}</p>
        <p>{article.votes} votes</p>
      </section>
    </div>
  );
};

export default ArticlePreviewCard;
