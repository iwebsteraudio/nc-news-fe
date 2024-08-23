import { fetchCommentsByArticleId } from "../../Utils/Api";
import { useState, useEffect } from "react";
import CommentCard from "./Cards/CommentCard";
import { useParams } from "react-router-dom";
import PostCommentForm from "./Tools/PostCommentForm";
import LoadingSpinner from "./Tools/LoadingSpinner";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
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
        if (err.response && err.response.status === 404) {
          setComments([]);
        } else {
          setErr(err);
        }
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

  // if (err) {
  //   return <p className="text-red-500">{err.msg}</p>;
  // }

  return (
    <>
    
    {comments.length === 0 ? (
      <>
        <p className="p-8">There Are No Comments Yet. Be the first to say something!</p>
        <PostCommentForm comments={comments} setComments={setComments} />
        </>
      ) : (
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
      )}
      </>
  );
};

export default CommentSection;
