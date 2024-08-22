import { fetchAllArticles, fetchArticlesByTopic } from "../../Utils/Api";
import ArticlePreviewCard from "./Cards/ArticlePreviewCard";
import LoadingSpinner from "./Tools/LoadingSpinner";
import SortBy from "./Tools/SortBy";
import { useEffect, useState } from "react";
import { NavLink, useParams, useSearchParams } from "react-router-dom";

const AllArticles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allArticles, setAllArticles] = useState([]);
  const [searchParams] = useSearchParams();
  const [err, setErr] = useState(0);

  const { topic } = useParams();
  const sortByQuery = searchParams.get("sort_by");
  const orderByQuery = searchParams.get("order_by");

  useEffect(() => {
    const params = {};
    setErr(0);
    setIsLoading(true);

    if (topic) params.topic = topic;
    if (sortByQuery) params.sort_by = sortByQuery;
    if (orderByQuery) params.order_by = orderByQuery;

    const fetchFunction = topic
      ? () => fetchArticlesByTopic(params)
      : () => fetchAllArticles(params);

    const fetchTimeout = setTimeout(() => {
      fetchFunction()
        .then((articles) => {
          setAllArticles(articles);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("Failed to fetch articles", err.response.status);
          setErr(err.response.status);
          setIsLoading(false);
        });
    }, 100);

    return () => clearTimeout(fetchTimeout);
  }, [topic, sortByQuery, orderByQuery]);

  if (isLoading)
    return (
      <div className="p-20">
        <LoadingSpinner />
        <p>Loading your feed, please be patient ...</p>
        <p className="p-10">
          If this is the first time loading the app, this might take a minute.
        </p>{" "}
        {}
      </div>
    );

  if (allArticles.length === 0 || err === 404) {
    return (
      <>
        <h1 className="p-8 m-8">
          Error 404 - There are no articles in this topic.
        </h1>
        <p className="p-8">Would you like to be the first to post?</p>
        <NavLink to={`/${topic}/submitarticle`}>Submit</NavLink>
      </>
    );
  }

  return (
    <>
      <div className="flex justify-end">
        <SortBy className="items-end" />
      </div>
      <ul>
        {allArticles.map((article) => (
          <ArticlePreviewCard key={article.article_id} article={article} />
        ))}
      </ul>
    </>
  );
};

export default AllArticles;
