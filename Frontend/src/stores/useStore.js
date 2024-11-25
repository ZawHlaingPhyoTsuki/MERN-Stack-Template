import { create } from "zustand";
import axios from "axios";

const useStore = create((set, get) => ({
  // Initial states
  products: [],
  categories: [],
  wishlist: [],
  cart: [],
  selectedCategory: null,
  filteredProducts: [],
  loading: true,
  quantities: {},

  // Toggle functions
  toggleWishlist: (product) => {
    set((state) => {
      const isInWishlist = state.wishlist.some(
        (item) => item.id === product.id
      );
      const updatedWishlist = isInWishlist
        ? state.wishlist.filter((item) => item.id !== product.id)
        : [...state.wishlist, product];
      return { wishlist: updatedWishlist };
    });
  },

  toggleCart: (product) => {
    set((state) => {
      const isInCart = state.cart.some((item) => item.id === product.id);
      const updatedCart = isInCart
        ? state.cart.filter((item) => item.id !== product.id)
        : [...state.cart, product];
      return { cart: updatedCart };
    });
  },

  // Fetch functions for products and categories
  fetchProducts: async () => {
    set({ loading: true });
    const url = "https://fakestoreapi.com/products";
    try {
      const response = await axios.get(url);
      set({ products: response.data, loading: false });
    } catch (error) {
      console.error("Error fetching products:", error);
      set({ loading: false });
    }
  },

  fetchCategories: async () => {
    set({ loading: true });
    const url = "https://fakestoreapi.com/products/categories";
    try {
      const response = await axios.get(url);
      set({ categories: response.data, loading: false });
    } catch (error) {
      console.error("Error fetching categories:", error);
      set({ loading: false });
    }
  },

  // Category filtering
  setCategory: (category) => {
    const products = get().products;
    const filteredProducts = category
      ? products.filter((product) => product.category === category)
      : products;
    set({ selectedCategory: category, filteredProducts });
  },

  // Quantity management
  incrementQuantity: (productId) =>
    set((state) => ({
      quantities: {
        ...state.quantities,
        [productId]: (state.quantities[productId] || 1) + 1,
      },
    })),

  decrementQuantity: (productId) =>
    set((state) => ({
      quantities: {
        ...state.quantities,
        [productId]: Math.max((state.quantities[productId] || 1) - 1, 1),
      },
    })),

  resetQuantity: (productId) =>
    set((state) => ({
      quantities: {
        ...state.quantities,
        [productId]: 1,
      },
    })),

 
}));

export default useStore;
