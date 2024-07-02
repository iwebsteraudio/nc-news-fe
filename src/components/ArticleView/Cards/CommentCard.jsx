import { useState, useContext } from "react";
import { deleteCommentByCommentId } from "../../../Utils/Api";
import { UserContext } from "../../../contexts/UserContext";

const CommentCard = ({ comment, formattedDate, setComments, comments }) => {
  const [err, setErr] = useState(null);
  const { user } = useContext(UserContext);
  const handleDelete = () => {
    const updatedComments = comments.filter((c) => {
      c !== comment;
    });

    setComments(updatedComments);

    deleteCommentByCommentId(comment.comment_id).catch((err) => {
      setComments([comment, ...comments]);
      setErr("something went wrong, please try again");
    });
  };
  console.log(user)

  return (
    <div className="flex flex-col border-b border-gray-500 p-4">
      <p className="mt-4">{comment.body}</p>
      <p className="mx-4">
        by {comment.author} at {formattedDate || comment.createdat}
      </p>
      <p className="mx-4"> {comment.votes} votes </p>
      {user === comment.author && (
        <button onClick={handleDelete} className="btn btn-blue self-end">
          delete
        </button>
      )}
      {err && <p classname="px-8">{err}</p>}
    </div>
  );
};

export default CommentCard;
