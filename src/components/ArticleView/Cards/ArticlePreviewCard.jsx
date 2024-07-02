import { Link } from "react-router-dom";

const ArticlePreviewCard = ({ article }) => {
  return (
    <div className="article-preview-container flex flex-col border-b border-gray-500 p-8">
      <section>
        <Link to={`/articles/${article.article_id}`}>
          <h2 className="font-sans font-bold">{article.title}</h2>
        </Link>

        <img src={article.article_img_url} className="mx-auto" />
        <h3>
          by {article.author} in {article.topic}
        </h3>
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
