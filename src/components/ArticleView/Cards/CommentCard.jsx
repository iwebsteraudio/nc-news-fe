import { useState, useContext } from "react";
import { deleteCommentByCommentId } from "../../../Utils/Api";
import { UserContext } from "../../../contexts/UserContext";
import { NavLink } from "react-router-dom";

const CommentCard = ({ comment, formattedDate, setComments, comments }) => {
  const [err, setErr] = useState(null);
  const { user } = useContext(UserContext);

  const handleDelete = () => {
    const updatedComments = comments.filter((c) => c !== comment);

    setComments(updatedComments);

    deleteCommentByCommentId(comment.comment_id).catch((err) => {
      setComments(comments);
      setErr("something went wrong, please try again");
    });
  };

  return (
    <div className="flex flex-col border-b border-gray-500 p-4 m-3">
      
      <div className="bg-stone-100 hover:bg-stone-200 m-5 p-5 rounded-3xl shadow-md transition-colors duration-300">
      <p className="mt-4 p-5">{comment.body}</p>

      <span>by </span>
        <NavLink to={`/users/${comment.author}`} className="font-bold">
          {comment.author}
        </NavLink>
        <span> at {formattedDate || comment.createdat}</span>
     
      <p className="mx-4 p-4"> {comment.votes} votes </p>
      {user === comment.author && (
        <button onClick={handleDelete} className="btn btn-std self-end">
          delete
        </button>
      )}
      {err && <p className="px-8">{err}</p>}
      </div>
    </div>
  );
};

export default CommentCard;
