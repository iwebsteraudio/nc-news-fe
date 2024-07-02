
import { useParams } from "react-router-dom";
import { postCommentByArticle_Id } from "../../../Utils/Api";
import { useState } from "react";

const PostCommentForm = ({ comments, setComments }) => {
  const [commentData, setCommentData] = useState("");
  const [err, setErr] = useState(null);

  const { article_id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (commentData.length !== 0) {
      postCommentByArticle_Id(article_id, commentData)
        .then((response) => {
          setComments((comments) => [response, ...comments])
        })
        .catch((err) => {
            setCommentData((commentData) => commentData);
            setErr("something went wrong, please try again");
        });
        setCommentData("");
    }
  };

  return (
    <form className="comment-form border-b border-gray-500 flex flex-col items-center p-4">
      <input
        className="comment-window mb-4 p-2 w-full border border-gray-300 rounded"
        name="comment"
        placeholder="add a comment..."
        type="text"
        value={commentData}
        onChange={(event) => setCommentData(event.target.value)}
      ></input>
      <button type="submit" onClick={handleSubmit} className="btn btn-blue px-4 py-2">
        submit comment
      </button>
      
    </form>
  );
};
export default PostCommentForm;
