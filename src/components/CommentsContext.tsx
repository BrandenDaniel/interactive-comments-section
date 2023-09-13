import { comments } from "@/types/comments";
import { currentUser } from "@/types/currentUser";
import { createContext } from "react";

type combined = comments & currentUser;

export const CommentsContext = createContext<combined | undefined>(undefined);
