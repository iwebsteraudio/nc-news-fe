import { fetchCommentsByArticleId } from "../../Utils/Api";
import { useState, useEffect } from "react";
import CommentCard from "./Cards/CommentCard";
import { useParams } from "react-router-dom";
import PostCommentForm from "./Tools/PostCommentForm";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then((commentData) => {
      const formattedComments = commentData.map((comment) => {
        const formattedDate = new Date(comment.created_at).toLocaleDateString(
          "en-GB",
          {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }
        );

        return {
          ...comment,
          formattedDate,
        };
      });
      setComments(formattedComments);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Loading ...</p>;
  else
    return (
      <>
        <h2>Comments</h2>
        <PostCommentForm comments={comments} setComments={setComments} />
        <ul>
          {comments.map((comment, index) => (
            <CommentCard
              key={index}
              comment={comment}
              formattedDate={comment.formattedDate}
              setComments={setComments}
              comments={comments}
            />
          ))}
        </ul>
      </>
    );
};

export default CommentSection;
