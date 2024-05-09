import { fetchCommentsByArticleId } from "../../Utils/Api";
import { useState, useEffect } from "react";
import CommentCard from "./Cards/CommentCard";

const CommentSection = ({ article }, { isLoading }) => {
  const [comments, setComments] = useState([]);


  useEffect(() => {
    fetchCommentsByArticleId(article.article_id).then((commentData) => {
      setComments(commentData);
    });
  }, [article]);

  if (isLoading) return <p>Loading ...</p>

  return (
    <>
    <h2>Comments</h2>
    <ul>
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
    </ul>
    </>
  );
};

export default CommentSection;
