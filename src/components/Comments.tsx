import React, { useContext } from "react";
import { CommentsContext } from "./CommentsContext";
import Image from "next/image";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";

const Comments = () => {
  const data = useContext(CommentsContext);

  const sortByHighestVote = data?.comments.sort((a, b) => {
    return b.score - a.score;
  });

  return (
    <section className="comments">
      {sortByHighestVote?.map((comment) => (
        <div className="comments__item">
          <div className="comments__item-header">
            <Image
              src={`/avatars/${comment.user.image.png}`}
              height={32}
              width={32}
              alt={comment.user.username}
            />
            <span className="comments__item-username">
              {comment.user.username}
            </span>
            <span className="comments__item-createdAt">
              {comment.createdAt}
            </span>
          </div>

          <p className="comments__item-content">{comment.content}</p>

          <div className="comments__item-cta">
            <div className="comments__item-score">
              <button>
                <GrFormAdd />
              </button>
              <span>{comment.score}</span>
              <button>
                <GrFormSubtract />
              </button>
            </div>

            <button className="comments__item-reply">Reply</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Comments;
