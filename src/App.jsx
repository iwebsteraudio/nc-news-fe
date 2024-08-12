import "./App.css";
import AllArticles from "./components/ArticleView/AllArticles";
import SingleArticle from "./components/ArticleView/SingleArticle";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";

import LogIn from "./components/LogIn";
import Header from "./components/Header";
import Nav from "./components/Nav";

import UserProfile from "./components/UserProfile";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App__${theme} flex flex-col min-h-screen font-sans`}>
      <Header />
      <div className="flex-grow">
        <Nav />
        <main className="p-8">
          <Routes>
            <Route path="/" element={<AllArticles />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route path="/articles/topics/:topic" element={<AllArticles />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/users/:username" element={<UserProfile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
