const CommentCard = ({ comment }) => {
  return (

    <div className="comment-card">
      <p>{comment.body}</p>
      <p>by {comment.author} at {comment.created_at}</p>
      <p> {comment.votes} votes </p>
    </div>
  );
};

export default CommentCard;
