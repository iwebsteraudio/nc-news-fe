import { fetchCommentsByArticleId } from "../../Utils/Api";
import { useState, useEffect } from "react";
import CommentCard from "./Cards/CommentCard";
import { useParams } from "react-router-dom";
import PostCommentForm from "./Tools/PostCommentForm";
import LoadingSpinner from "./Tools/LoadingSpinner";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");
  const { article_id } = useParams();

  useEffect(() => {
    fetchCommentsByArticleId(article_id)
      .then((commentData) => {
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
      })
      .catch((err) => {
        setErr("Failed to load comments. Please try again later.");
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading)
    return (
      <div className="p-20">
        <LoadingSpinner />
        <p>Loading your comments...</p>
      </div>
    );
  if (err) {
    return <p className="text-red-500">{err}</p>;
  }

  return (
    <>
      <h2>Comments</h2>
      <PostCommentForm comments={comments} setComments={setComments} />

      {comments.length === 0 ? (
        <p>There Are No Comments Yet</p>
      ) : (
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
      )}
    </>
  );
};

export default CommentSection;
