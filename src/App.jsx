import "./App.css";
import AllArticles from "./components/ArticleView/AllArticles";
import SingleArticle from "./components/ArticleView/SingleArticle";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";

import LogIn from "./components/LogIn";
import Header from "./components/Header";
import ErrorPage from "./components/ErrorPage";
import UserProfile from "./components/UserProfile";
import CreateTopic from "./components/ArticleView/Tools/CreateTopic";
import SubmitNewArticle from "./components/ArticleView/Tools/SubmitNewArticle";


function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App__${theme} flex flex-col min-h-screen font-sans`}>
      <Header />
      <div className="flex-grow">
        <main className="p-1">
          <Routes>
            <Route path="/" element={<AllArticles />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route path="/:topic/articles" element={<AllArticles />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/users/:username" element={<UserProfile />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="topics/createtopic" element={<CreateTopic />} />
            <Route path=":topic/submitarticle" element={<SubmitNewArticle />} />
            <Route path="submitarticle" element={<SubmitNewArticle />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
