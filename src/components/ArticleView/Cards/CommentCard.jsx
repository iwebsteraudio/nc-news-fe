import { deleteCommentByCommentId } from "../../../Utils/Api";

const CommentCard = ({ comment, comments, setComments }) => {


  const handleDelete = () => {
    setComments((comment) => [comment, ...comments]);
    deleteCommentByCommentId(comment.comment_id).then((response) => {
      console.log(response)
      return response;
    });
};

  return (

    <div className="comment-card">
      <p>{comment.body}</p>
      <p>by {comment.author} at {comment.created_at}</p>
      <p> {comment.votes} votes </p>
      <button type="delete" onClick={handleDelete}>
            delete post
          </button>
    </div>
  );
};

export default CommentCard;
