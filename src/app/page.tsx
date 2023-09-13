"use client";

import React, { useState } from "react";
import NewComment from "@/components/NewComment";
import Data from "../data/data.json";
import { CommentsContext } from "@/components/CommentsContext";
import Comments from "@/components/Comments";

const Page = () => {
  const [commentsData, setCommentsData] = useState({ ...Data });

  return (
    <main className="container">
      <CommentsContext.Provider value={commentsData}>
        <section className="comments">
          <Comments />
        </section>
        <NewComment />
      </CommentsContext.Provider>
    </main>
  );
};

export default Page;
