import { fetchCommentsByArticleId } from "../../Utils/Api";
import { useState, useEffect } from "react";
import CommentCard from "./Cards/CommentCard";
import { useParams } from "react-router-dom";

const CommentSection = ({ article }) => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  useEffect(() => {
    fetchCommentsByArticleId(article_id).then((commentData) => {
      setComments(commentData);
    });
  }, []);

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
