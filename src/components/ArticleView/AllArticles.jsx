import ArticlePreviewCard from "./Cards/ArticlePreviewCard";

const AllArticles = ({ allArticles, isLoading }) => {
  if (isLoading) return <p>Loading your feed, please be patient ...</p>;

  return (
    <ul>
      {allArticles.map((article) => (
        <ArticlePreviewCard key={article.article_id} article={article} />
      ))}
    </ul>
  );
};

export default AllArticles;
