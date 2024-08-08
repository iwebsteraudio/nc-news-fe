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
import UserProfile from "./components/UserProfile";

function App() {
  const { theme } = useContext(ThemeContext);

  const [isLoading, setIsLoading] = useState(true);

  const [allArticles, setAllArticles] = useState([]);
  useEffect(() => {
    fetchAllArticles().then((articles) => {
      setAllArticles(articles);
      setIsLoading(false);
    });
  }, [setAllArticles]);

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
              path="/articles/topic/:topic"
              element={
                <AllArticlesTopic
                  allArticles={allArticles}
                  setAllArticles={setAllArticles}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              }
            />
            <Route path="/login" element={<LogIn />} />
            <Route path="/users/:username" element={<UserProfile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
