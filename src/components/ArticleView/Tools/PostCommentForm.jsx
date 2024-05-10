import { useParams } from "react-router-dom";
import { postCommentByArticle_Id } from "../../../Utils/Api";
import { useState } from "react";

const PostCommentForm = ({comments, setComments}) => {
  // set commentData state as an empty object
  const [commentData, setCommentData] = useState("");
  // set error state as null
  const [err, setErr] = useState(null);

  // invoke useParams to destructure the article_id
  const { article_id } = useParams();

  // Click Handler
  const handleSubmit = (event) => {
    event.preventDefault();

    if (commentData.length !== 0){
        postCommentByArticle_Id(article_id, commentData)
        .then((response)=>{
            console.log(response)
            setComments((comments) => [response, ...comments])
        })
        .catch((err) => {
          setCommentData((commentData) => commentData);
          setErr("something went wrong, please try again");
        });
      };

    }

  // returns a form with validation
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
