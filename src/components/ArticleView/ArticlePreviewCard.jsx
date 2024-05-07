

const ArticlePreviewCard = ({article}) => {
 
    return (
    <div className="article-preview-container">
      <section className="head-content">
      <h2>
        {article.title}      
      </h2>
      <h3>by {article.author} in {article.topic}</h3>
      </section>
      <section className="foot-content">
      <p>comments {article.comment_count}</p>
      <p>{article.date}</p>
      <p>votes {article.votes}</p>
      </section>
    </div>
  );
};

export default ArticlePreviewCard;
