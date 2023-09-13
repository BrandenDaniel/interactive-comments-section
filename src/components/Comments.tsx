import React, { useContext } from "react";
import { CommentsContext } from "./CommentsContext";
import CommentItem from "./CommentItem";

const Comments = () => {
  const data = useContext(CommentsContext);

  const sortByHighestVote = data?.comments.sort((a, b) => {
    return b.score - a.score;
  });

  return (
    <>
      {sortByHighestVote?.map((item) => (
        <>
          <CommentItem {...item} />

          <CommentItem replies={item.replies} />
        </>
      ))}
    </>
  );
};

export default Comments;
