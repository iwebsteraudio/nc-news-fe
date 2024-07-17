import { useEffect, useState } from "react";
import { fetchAllArticlesByTopic } from "../../Utils/Api";
import ArticlePreviewCard from "./Cards/ArticlePreviewCard";
import { useParams } from "react-router-dom";

const AllArticlesTopic = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allArticlesTopic, setAllArticlesTopic] = useState([]);
  const { topic } = useParams();


  useEffect(() => {
    fetchAllArticlesByTopic(topic).then((articles) => {
      setAllArticlesTopic(articles);
      setIsLoading(false);
    }).catch((err) => {
      console.log(err)
    });
  }, []);

  if (isLoading) return <p>Loading your feed, please be patient ...</p>;

  return (
    <ul>
      {allArticlesTopic.map((article) => (
        <ArticlePreviewCard key={article.article_id} article={article} />
      ))}
    </ul>
  );
};

export default AllArticlesTopic;
