import ArticlePreviewCard from "./Cards/ArticlePreviewCard";
import { useParams } from "react-router-dom";

const AllArticlesTopic = ({ allArticles, isLoading }) => {
  const { topic } = useParams();

  if (isLoading) return <p>Loading your feed, please be patient ...</p>;

  return (
    <ul>
      {allArticles.map(
        (article) =>
          article.topic === topic && (
            <ArticlePreviewCard key={article.article_id} article={article} />
          )
      )}
    </ul>
  );
};

export default AllArticlesTopic;
