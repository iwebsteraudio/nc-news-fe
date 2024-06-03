import { useState } from "react";
import { deleteCommentByCommentId } from "../../../Utils/Api";

const CommentCard = ({ comment, setComments, comments }) => {
  const [err, setErr] = useState(null);

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

  return (
    <div className="comment-card">
      <p>{comment.body}</p>
      <p>
        by {comment.author} at {comment.created_at}
      </p>
      <p> {comment.votes} votes </p>
      <button onClick={handleDelete}>
        delete
      </button>
      {err && <p>{err}</p>}
    </div>
  );
};

export default CommentCard;
