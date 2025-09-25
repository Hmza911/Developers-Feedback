export interface Feedback {
  id: string;
  title: string;
  message: string;
  tags: string[];
  likes: number;
  dislikes: number;
  userReaction?: 'like' | 'dislike' | null;
  author: {
    name: string;
    avatar?: string;
  };
  createdAt: Date;
}

export interface CreateFeedbackRequest {
  title: string;
  message: string;
  tags: string[];
}

export interface ReactionUpdate {
  feedbackId: string;
  type: 'like' | 'dislike';
}