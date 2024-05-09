import { fetchAllArticles } from "../../Utils/Api"; 
import { useEffect, useState } from "react";
import ArticlePreviewCard from "./Cards/ArticlePreviewCard";

const AllArticles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allArticles, setAllArticles] = useState([])
useEffect(()=>{
  fetchAllArticles().then((articles)=>{
    setAllArticles(articles)
    setIsLoading(false);
  })
},[])

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