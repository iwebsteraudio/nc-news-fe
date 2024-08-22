import { useEffect, useState } from "react";
import { fetchAllTopics, postNewTopic } from "../../../Utils/Api";

const CreateTopic = () => {
  const [allTopics, setAllTopics] = useState([]);
  const [topicData, setTopicData] = useState({ slug: "", description: "" });
  const [err, setErr] = useState("");

  useEffect(() => {
    fetchAllTopics()
      .then((topics) => {
        setAllTopics(topics);
      })
      .catch((err) => {
        console.log("error fetching topics", err);
      });
  }, []);

  const { slug, description } = topicData;

  const handleSubmit = (event) => {
    event.preventDefault();

    const topicAlreadyExists = allTopics.some(
      (topic) => topic.slug === topicData.slug
    );
    if (!topicAlreadyExists) {
      postNewTopic(topicData)
        .then((response) => {
          setAllTopics([...allTopics, response]);
          setTopicData({ slug: "", description: "" });
          setErr("");
        })
        .catch((err) => {
          setErr("an error occurred while posting this topic");
        });
    }
    else {
      setErr("This topic already exists")
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTopicData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="flex flex-col items-center p-8 m-8">
      <h2 className="justify-center">Post your topic</h2>
      <form className="topic-submit-form border-b flex flex-col items-center p-4">
        <input
          className="comment-window mb-4 p-2 w-full border border-gray-300 rounded"
          name="slug"
          placeholder="Title your topic"
          value={slug}
          onChange={handleChange}
        ></input>
        <input
          className="comment-window mb-4 p-2 w-full border border-gray-300 rounded"
          name="description"
          placeholder="Describe your topic"
          value={description}
          onChange={handleChange}
        ></input>
        <button type="submit" className="btn btn-std" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {err && <p className="text-red-500 mt-2">{err}</p>}
    </div>
  );
};

export default CreateTopic;
