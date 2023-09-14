"use client";

import React, { useState } from "react";
import NewComment from "@/components/NewComment";
import Data from "../data/data.json";
import Comments from "@/components/Comments";

const Page = () => {
  const [comments, setComments] = useState([...Data.comments]);
  const [currentUser, setcurrentUser] = useState({ ...Data.currentUser });

  return (
    <main className="container">
      <section className="comments">
        <Comments comments={comments} setComments={setComments} />
      </section>
      <NewComment currentUser={currentUser} />
    </main>
  );
};

export default Page;
