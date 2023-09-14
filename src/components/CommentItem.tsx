import React from "react";
import Image from "next/image";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";

export type comment = {
  id: number;
  originalComment: boolean;
  content: string;
  createdAt: string;
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  replies?: {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    replyingTo?: string | undefined;
    user: {
      image: {
        png: string;
        webp: string;
      };
      username: string;
    };
  }[];

  setComments: (newComments: Comment[]) => void;
};

const CommentItem = (props: comment) => {
  return (
    <div
      className={`comments__item ${
        props.originalComment
          ? "comments__item--original"
          : "comments__item--reply"
      }`}
      key={props.id}
    >
      <div className="comments__item-header">
        <Image
          src={`/avatars/${props.user.image.png}`}
          height={32}
          width={32}
          alt={props.user.username}
        />
        <span className="comments__item-username">{props.user.username}</span>
        <span className="comments__item-createdAt">{props.createdAt}</span>
      </div>

      <p className="comments__item-content">{props.content}</p>

      <div className="comments__item-cta">
        <div className="comments__item-score">
          <button>
            <GrFormAdd />
          </button>
          <span>{props.score}</span>
          <button>
            <GrFormSubtract />
          </button>
        </div>

        <button className="comments__item-reply">Reply</button>
      </div>
    </div>
  );
};

export default CommentItem;
