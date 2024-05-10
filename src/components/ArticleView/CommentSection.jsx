import { fetchCommentsByArticleId } from "../../Utils/Api";
import { useState, useEffect } from "react";
import CommentCard from "./Cards/CommentCard";
import { useParams } from "react-router-dom";
import PostCommentForm from "./Tools/PostCommentForm";

const CommentSection = ({ article }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = useParams();
  useEffect(() => {
    fetchCommentsByArticleId(article_id).then((commentData) => {
      setComments(commentData);
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
          {comments.map((comment,index) => (
            <CommentCard key={index} comment={comment} setComments={setComments} />
          ))}
        </ul>
      </>
    );
};

export default CommentSection;
