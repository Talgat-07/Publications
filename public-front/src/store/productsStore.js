import { create } from "zustand";
import { BASE_URL } from "../constants/constants";
import axios from "axios";

export const useProductsStore = create((set) => ({
  products: [],
  getProducts: async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/products`);

      set({ products: data });
    } catch (e) {
      console.log(e);
    }
  },
  addProduct: async (product) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/products`, product);

      set((state) => {
        const newProducts = [...state.products, data];
        return { products: newProducts };
      });
    } catch (e) {
      console.log(e);
    }
  },
  deleteProduct: async (id) => {
    try {
      const { data } = await axios.delete(`${BASE_URL}/products/${id}`);
      if (data) {
        set((state) => {
          const newProducts = state.products.filter(
            (product) => product._id !== id
          );
          return { products: newProducts };
        });
      }
    } catch (e) {
      console.log(e);
    }
  },
  filterProducts: (don) => {
    set((state) => {
      const newProducts = state.products.sort((a, b) => {
        if (don === "1") {
          return b.averageRating - a.averageRating;
        }
        return a.category - b.category;
      });
      return { products: newProducts };
    });
  },
}));
