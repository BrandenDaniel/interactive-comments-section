export type comments = {
  comments: {
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
  }[];
};
