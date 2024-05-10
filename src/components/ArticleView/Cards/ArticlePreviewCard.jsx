import VoteButtons from '../VoteButtons';
import { Link } from 'react-router-dom';

const ArticlePreviewCard = ({article}) => {
    
    return (
    <div className="article-preview-container">
      <section className="head-content">
      
      <Link to={`/articles/${article.article_id}`}>
      <h2>{article.title}</h2>
      <h3>by {article.author} in {article.topic}</h3>
      </Link>
      
      </section>

      
      <section className="foot-content">
      <p>{article.comment_count} comments</p>
      <p>{article.date}</p>
      <VoteButtons votes={ article.votes }/>
      </section>
    </div>
  );
};

export default ArticlePreviewCard;