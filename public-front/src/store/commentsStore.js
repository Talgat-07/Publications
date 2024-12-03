import axios from "axios";
import { create } from "zustand";
import { BASE_URL } from "../constants/constants";

export const useCommentsStore = create((set) => ({
  comments: [],
  getCommentsByProductId: async (id) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/comments/${id}`);
      set({ comments: data });
    } catch (e) {
      console.log(e);
    }
  },
  deleteComment: async (id) => {
    try {
      const { data } = await axios.delete(`${BASE_URL}/comments/${id}`);
      if (data) {
        set((state) => {
          const newComments = state.comments.filter(
            (comment) => comment._id !== id
          );
          return { comments: newComments };
        });
      }
    } catch (e) {
      console.log(e);
    }
  },
  createComment: async (comment) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/comments`, comment);
      set((state) => {
        const newComments = [...state.comments, data];
        return { comments: newComments };
      });
    } catch (e) {
      console.log(e);
    }
  },
  commentDelete: async (id) => {
    try {
      const { data } = await axios.delete(`${BASE_URL}/comment/${id}`);
      if (data) {
        set((state) => {
          const newComments = state.comments.filter(
            (comment) => comment._id !== id
          );
          return { comments: newComments };
        });
      }
    } catch (e) {
      console.log(e);
    }
  },
}));
