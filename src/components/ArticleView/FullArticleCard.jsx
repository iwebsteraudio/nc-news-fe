const FullArticleCard = ({article}, {isLoading}) => {

  if (isLoading) return <p>Loading your lovely, lovely content ...</p>;

  return (
    <div className="article-card">
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <p>by {article.author} at {article.created_at}</p>
      <p>{article.votes} votes</p>
    </div>
  );
};

export default FullArticleCard;
