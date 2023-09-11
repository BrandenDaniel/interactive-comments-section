import Image from "next/image";
import { useContext } from "react";
import { CommentsContext } from "./CommentsContext";

const NewComment = () => {
  const data = useContext(CommentsContext);

  return (
    <section className="newComment">
      <form>
        <textarea name="" id="" placeholder="Add a comment..."></textarea>
        <div>
          <Image
            src={`/avatars/${data?.currentUser.image.png}`}
            alt={data?.currentUser.username!}
            height={32}
            width={32}
          />
          <button type="submit">SEND</button>
        </div>
      </form>
    </section>
  );
};

export default NewComment;
