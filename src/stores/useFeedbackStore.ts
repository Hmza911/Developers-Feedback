import { create } from "zustand";
import { Feedback, CreateFeedbackRequest } from "@/types/feedback";

type FeedbackStore = {
  feedbacks: any[] | null;
  loading: boolean;
  error: string | null;

  fetchFeedbacks: () => Promise<void>;
  addFeedback: (feedbackData: CreateFeedbackRequest) => Promise<void>;
  reactFeedback: (
    id: string,
    action: "like" | "dislike",
    previousAction?: "like" | "dislike" | null
  ) => Promise<void>;
};

const useFeedbackStore = create<FeedbackStore>((set) => ({
  feedbacks: [],
  loading: false,
  error: null,

  fetchFeedbacks: async () => {
    set({ loading: true });
    try {
      const res = await fetch("http://localhost:8089/feedback");
      const data = await res.json();
      console.log(`data: ${JSON.stringify(data.data)}`);
      set({ feedbacks: data.data, loading: false });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to fetch";
      set({ error: message, loading: false });
    }
  },

  addFeedback: async (feedbackData) => {
    try {
      const res = await fetch("http://localhost:8089/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedbackData),
      });
      const newFeedback: Feedback = await res.json();
      set((state) => ({ feedbacks: [newFeedback, ...state.feedbacks] }));
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to add feedback";
      set({ error: message });
      throw err;
    }
  },

  reactFeedback: async (id, action, previousAction = null) => {
    try {
      const res = await fetch(
        `http://localhost:8089/feedback/react?feedback_id=${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action, previousAction }),
        }
      );
      const updatedFeedback: Feedback = await res.json();
      set((state) => ({
        feedbacks: state.feedbacks.map((f) => (f.id === id ? updatedFeedback : f)),
      }));
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to react";
      set({ error: message });
    }
  },
}));

export default useFeedbackStore;
