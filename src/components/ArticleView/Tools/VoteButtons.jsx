import { useState, useEffect } from "react";
import { patchVotesByArticle_Id } from "../../../Utils/Api";
import { useParams } from "react-router-dom";
import {
  IoThumbsUp,
  IoThumbsUpOutline,
  IoThumbsDown,
  IoThumbsDownOutline,
} from "react-icons/io5";

const VoteButtons = ({ votes }) => {
  const [currVotes, setVotes] = useState(votes);
  const [voteStatus, setVoteStatus] = useState(null);
  const { article_id } = useParams();
  const [err, setErr] = useState(null);

  const handleClick = (voteChange) => {
    
    const newVoteStatus = voteStatus === voteChange ? null : voteChange;

    setVotes(
      (currVotes) => currVotes + (newVoteStatus || 0) - (voteStatus || 0)
    );
    setVoteStatus(newVoteStatus);

    patchVotesByArticle_Id(
      article_id,
      (newVoteStatus || 0) - (voteStatus || 0)
    ).catch((err) => {
      setVotes(
        (currVotes) =>
          currVotes - (newVoteStatus || 0) + (voteStatus || 0)
      );
      setVoteStatus(voteStatus);
      setErr("something went wrong, please try again");
    });
  };

  return (
    <div className="vote-buttons flex p-3 mx-4">
      <button
        onClick={() => {
          handleClick(-1);
        }}
        className="inline-flex w-full h-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        disabled={voteStatus === -1}
      >
        {voteStatus === -1 ? <IoThumbsDown /> : <IoThumbsDownOutline />}
      </button>

      <p className="p-3">{currVotes} votes</p>

      <button
        onClick={() => {
          handleClick(+1);
        }}
        className="inline-flex w-full h-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        disabled={voteStatus === 1}
      >
        {voteStatus === 1 ? <IoThumbsUp /> : <IoThumbsUpOutline />}
      </button>
      {err && <p className="text-red-500">{err}</p>}
    </div>
  );
};

export default VoteButtons;
