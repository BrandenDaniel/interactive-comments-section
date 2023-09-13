export type comment = {
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
};
