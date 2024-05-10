import { useState, useEffect } from "react";

const VoteButtons = ({ votes }) => {
  console.log(votes);
  // const [votes, setVotes] = useState()

  //   const vote = (e) => {
  //     e.preventDefault();

  //         votes++

      useEffect(()=>{
        
      },[votes])
  //     //dosummink - needs to invoke a patch request to increment or decrement the votes count.

  //   };
  return (
    <div className="vote-buttons">
      <button>+</button>
      <p>Votes: {votes} </p>
      <button>-</button>
    </div>
  );
};

export default VoteButtons;
