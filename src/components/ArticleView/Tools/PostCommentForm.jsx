
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
    <form className="comment-form">
      <input
        className="comment-window"
        name="comment"
        placeholder="add a comment..."
        type="text"
        value={commentData}
        onChange={(event) => setCommentData(event.target.value)}
      ></input>
      <button type="submit" onClick={handleSubmit}>
        submit comment
      </button>
      
    </form>
  );
};
export default PostCommentForm;
