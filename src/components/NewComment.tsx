import { currentUser } from "@/types/currentUser";
import Image from "next/image";

const NewComment = (props: currentUser) => {
  return (
    <section className="newComment">
      <form>
        <textarea name="" id="" placeholder="Add a comment..."></textarea>
        <div>
          <Image
            src={`/avatars/${props.currentUser.image.png}`}
            alt={props.currentUser.username!}
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
