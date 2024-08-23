import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { useContext, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { fetchAllTopics, postNewArticle } from "../../../Utils/Api";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";

const SubmitNewArticle = () => {
  const [article, setArticle] = useState({
    title: "",
    body: "",
    article_img_url: "",
    topic: "",
    author: ""
  });
  const [allTopics, setAllTopics] = useState([]);
  const [err, setErr] = useState("");
  const user = useContext(UserContext)

  const { topic } = useParams();
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState(topic || "");

  useEffect(() => {
    
    fetchAllTopics()
      .then((topicData) => {
        setAllTopics(topicData);
        setErr("");
      })
      .catch((err) => {
        setErr(err);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedTopic) {
      setErr("Please select a topic before submitting.");
      return;
    }

    const articleToSubmit = {
      ...article,
      topic: selectedTopic.toLowerCase(),
      author:user.user,
    };

    postNewArticle(articleToSubmit)
      .then((newArticle) => {
        setArticle({ title: "", body: "", topic: "", article_img_url: "", author: user.user});
        navigate(`/articles/${newArticle.article_id}`);
      })
      .catch((err) => {
        setErr(err.msg);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setArticle((prevArticle) => ({
      ...prevArticle,
      [name]: value,
    }));
  };

  const handleTopicSelect = (formattedTopic) => {
    setSelectedTopic(formattedTopic);
    setArticle((prevArticle) => ({
      ...prevArticle,
      topic: formattedTopic.toLowerCase(),
    }));
  };

  return (
    <div className="flex flex-col items-center p-8 m-8">
      <h2 className="justify-center">Submit a new article</h2>
      <form
        className="article-submit-form flex flex-col items-center p-4"
        onSubmit={handleSubmit}
      >
        <Menu as="div" className="p-6 relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              {selectedTopic || "Topic"}
              <FaChevronDown className="-mr-1 h-5 w-5 text-gray-400" />
            </MenuButton>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              {allTopics.map((topicItem) => {
                const formattedTopic = `${topicItem.slug
                  .charAt(0)
                  .toUpperCase()}${topicItem.slug.slice(1)}`;
                return (
                  <MenuItem key={topicItem.slug}>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-100" : ""
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        onClick={() => handleTopicSelect(formattedTopic)}
                      >
                        {formattedTopic}
                      </button>
                    )}
                  </MenuItem>
                );
              })}
            </MenuItems>
          </div>
        </Menu>
        <input
          className="comment-window mb-4 p-2 w-full border border-gray-300 rounded"
          name="title"
          placeholder="add a title..."
          type="text"
          value={article.title}
          onChange={handleChange}
        ></input>
        <input
          className="comment-window mb-4 p-2 w-full border border-gray-300 rounded"
          name="body"
          placeholder="what would you like to say?"
          type="text"
          value={article.body}
          onChange={handleChange}
        ></input>
        <input
          className="comment-window mb-4 p-2 w-full border border-gray-300 rounded"
          name="article_img_url"
          placeholder="Link to an image"
          type="text"
          value={article.article_img_url}
          onChange={handleChange}
        ></input>

        <Button
          type="submit"
          className="btn-std article-submit-form flex flex-col items-center"
        >
          Submit
        </Button>
      </form>
      {err && <p className="text-red-500 mt-2">{err}</p>}
    </div>
  );
};

export default SubmitNewArticle;
