import "./App.css";
import AllArticles from "./components/ArticleView/AllArticles";
import SingleArticle from "./components/ArticleView/SingleArticle";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext, useState, useEffect } from "react";

import LogIn from "./components/LogIn";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App__${theme} flex flex-col min-h-screen`}>
      <Header />

      <div className="flex-grow">
        <Nav />
        <main className="p-8">
        <Routes>
          <Route path="/" element={<AllArticles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
