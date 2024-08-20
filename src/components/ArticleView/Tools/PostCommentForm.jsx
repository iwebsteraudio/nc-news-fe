import { useParams } from "react-router-dom";
import { postCommentByArticle_Id } from "../../../Utils/Api";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext"

const PostCommentForm = ({ comments, setComments }) => {
  const [commentData, setCommentData] = useState("");
  const [err, setErr] = useState(null);

  const { article_id } = useParams();
  const  storedUser = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (commentData.length !== 0 && storedUser.user) {
      const newComment = { body: commentData,
                            author: storedUser.username,
                            created_at: new Date().toISOString(),
                            votes: 0,
       };
      setComments([newComment, ...comments]);

      setCommentData("");

      postCommentByArticle_Id(article_id, commentData)
        .then((response) => {
          setComments((currentComments) => {
            const updatedComments = [...currentComments];
            updatedComments[0] = response;
            return updatedComments;
          });
        })
        .catch((err) => {
          setCommentData((currentComments) => currentComments.slice(1));
          setErr("something went wrong, please try again");
        });
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
      <div className="flex flex-row w-full">
        <button
          type="submit"
          onClick={handleSubmit}
          className={`btn btn-std flex-start ${!storedUser.user ? "bg-gray-300 text-gray-500 cursor-not-allowed": ""}`}
          disabled={!storedUser.user}
        >
          submit
        </button>
      </div>
      {err && <p className="text-red-500 mt-2">{err}</p>}
    </form>
  );
};
export default PostCommentForm;
