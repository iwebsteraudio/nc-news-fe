import { useState, useContext } from "react";
import { deleteCommentByCommentId } from "../../../Utils/Api";
import { UserContext } from "../../../contexts/UserContext";

const CommentCard = ({ comment, setComments, comments }) => {

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

  return (
    <div className="flex flex-col border-b border-gray-500 px-8 my-8">
      <p classname="mx-8">{comment.body}</p>
      <p classname="mx-8">
        by {comment.author} at {comment.created_at}
      </p>
      <p classname="mx-8"> {comment.votes} votes </p>
      {user && <button onClick={handleDelete} className="btn btn-blue">
        delete
      </button>}
      {err && <p classname="px-8">{err}</p>}
    </div>
  );
};

export default CommentCard;
