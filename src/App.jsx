import "./App.css";
import AllArticles from "./components/ArticleView/AllArticles";
import SingleArticle from "./components/ArticleView/SingleArticle";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import ToggleTheme from "./components/ToggleTheme";
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import LogIn from "./components/LogIn";

function App() {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  return (
    <div className={`App__${theme}`}>
      <ToggleTheme />
      <section className="header">
        <Header />
      </section>

      <section className="body">
        <Routes>
          <Route path="/" element={<AllArticles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
