import CommentItem from "./CommentItem";

export type comments = {
  comments: Comment[];
  setComments: (newComments: Comment[]) => void;
};

type Comment = {
  id: number;
  originalComment?: boolean;
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
  replies?: Comment[];
};

const Comments = (props: comments) => {
  const sortByHighestVote = props.comments?.sort((a, b) => {
    return b.score - a.score;
  });

  return (
    <>
      {sortByHighestVote?.map((item) => (
        <div className="comments__wrapper" key={item.id}>
          <CommentItem
            {...item}
            originalComment={true}
            setComments={props.setComments}
          />
          {item.replies &&
            item.replies.map((reply) => (
              <CommentItem
                key={reply.id}
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
