"use client";

import React, { useState } from "react";
import NewComment from "@/components/NewComment";
import Data from "../data/data.json";
import { CommentsContext } from "@/components/CommentsContext";
import Comments from "@/components/Comments";

export type CommentsType = {
  currentUser: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  comments: Array<{
    id: number;
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
    replies: Array<{
      id: number;
      content: string;
      createdAt: string;
      score: number;
      replyingTo?: string; // If needed, include the replyingTo property
      user: {
        image: {
          png: string;
          webp: string;
        };
        username: string;
      };
    }>;
  }>;
};
const page = () => {
  const [commentsData, setCommentsData] = useState({ ...Data });

  return (
    <main className="container">
      <CommentsContext.Provider value={commentsData}>
        <Comments />
        <NewComment />
      </CommentsContext.Provider>
    </main>
  );
};

export default page;
