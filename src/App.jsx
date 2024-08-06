import "./App.css";
import AllArticles from "./components/ArticleView/AllArticles";
import SingleArticle from "./components/ArticleView/SingleArticle";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext, useState, useEffect } from "react";

import LogIn from "./components/LogIn";
import Header from "./components/Header";
import Nav from "./components/Nav";
import AllArticlesTopic from "./components/ArticleView/AllArticlesTopic";
import { fetchAllArticles } from "./Utils/Api";
import SortBy from "./components/ArticleView/Tools/SortBy";

function App() {
  const { theme } = useContext(ThemeContext);

  const [isLoading, setIsLoading] = useState(true);

  const [allArticles, setAllArticles] = useState([]);
  useEffect(() => {
    fetchAllArticles().then((articles) => {
      setAllArticles(articles);
      setIsLoading(false);
    });
  }, [allArticles]);

  return (
    <div className={`App__${theme} flex flex-col min-h-screen font-sans`}>
      <Header />
      <div className="flex-grow">
        <Nav />
        <main className="p-8">
          <div className="flex justify-end">
            <SortBy className="items-end" />
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <AllArticles
                  allArticles={allArticles}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              }
            />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route
              path="/topics/:topic"
              element={
                <AllArticlesTopic
                  allArticles={allArticles}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              }
            />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
