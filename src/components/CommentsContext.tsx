import { CommentsType } from "@/app/page";
import { createContext } from "react";

export const CommentsContext = createContext<CommentsType | undefined>(
  undefined
);
