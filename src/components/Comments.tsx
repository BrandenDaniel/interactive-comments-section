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
        <div className="comments__wrapper">
          <CommentItem {...item} originalComment={true} />
          {item.replies &&
            item.replies.map((reply) => (
              <CommentItem
                id={reply.id}
                originalComment={false}
                content={reply.content}
                score={reply.score}
                createdAt={reply.createdAt}
                user={reply.user}
              />
            ))}
        </div>
      ))}
    </>
  );
};

export default Comments;
