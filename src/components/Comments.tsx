import React, { useContext } from "react";
import { CommentsContext } from "./CommentsContext";

const Comments = () => {
  const data = useContext(CommentsContext);

  const sortByHighestVote = data?.comments.sort((a, b) => {
    return b.score - a.score;
  });

  return (
    <section className="comments">
      {sortByHighestVote?.map((comment) => (
        <div className="comments__item">
          <div className="comments__item-header"></div>
        </div>
      ))}
    </section>
  );
};

export default Comments;
