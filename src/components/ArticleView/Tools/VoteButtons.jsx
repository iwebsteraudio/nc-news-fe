import { useState, useEffect } from "react";
import { patchVotesByArticle_Id } from "../../../Utils/Api";
import { useParams } from "react-router-dom";

const VoteButtons = ({ votes }) => {
  const [currVotes, setVotes] = useState(votes);
  const {article_id} = useParams();
  const [err, setErr] = useState(null);
 const [ hasVoted, setHasVoted] = useState(false)

  // handleclick event

  const handleClick = (voteChange) => {
    setVotes((currVotes) => currVotes + voteChange);

    patchVotesByArticle_Id(article_id, voteChange)
    .catch((err) => {
      setVotes((currVotes) => currVotes - 1);
      setErr("something went wrong, please try again");
    });
  };


// buttons to update
return (
  <div className="vote-buttons">
    <button onClick={()=>{
      handleClick(+1)
    }} className="btn btn-blue" >+</button>

    <p>{ currVotes } votes</p>
    
    <button onClick={()=>{
      handleClick(-1)
    }} className="btn btn-blue">-</button>
  </div>
)};

export default VoteButtons;
