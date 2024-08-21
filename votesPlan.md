Outline

The voting system needs to store the user_id and article_id for anyone who has voted on the given article, so that the user can return to the article from any computer and see that their vote is still in-place, and therefore cannot refresh or re-render the page and re-vote.

This will require a new table looking like the following

{
"vote_values":    {  
                    "article_id": "FK from articles table and Primary key",
                    "haveVotedUp": ["34","21","14"],
                    "
                    }
}

articleID 12 votes
userID|value
12    |0
13    |-1
54    |0
67    |1