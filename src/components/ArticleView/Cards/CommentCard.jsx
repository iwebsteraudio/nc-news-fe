import VoteButtons from "../VoteButtons";

const CommentCard = ({ comment }) => {
  return (
    
    <div className="comment-card">
      <p>{comment.body}</p>
      <p>by {comment.author} at {comment.created_at}</p>
      <VoteButtons votes={ comment.votes } />
    </div>
  );
};

export default CommentCard;
