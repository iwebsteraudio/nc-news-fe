import "./App.css";
import AllArticles from "./components/ArticleView/AllArticles";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <section className="header">
        <Header />
      </section>

      <section className="body">
        <Routes>
          <Route path="/" element={<AllArticles />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
