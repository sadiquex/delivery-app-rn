import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [action.payload, ...state.cartItems];
    },

    removeFromCart: (state, action) => {
      // return all elements, except the one with the id passed
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload.id,
      );
    },

    emptyCart: (state) => {
      state.cartItems = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

// export const selectCartItems = (state) => state.cart.cartItems;

export const selectItemById = (state, id) =>
  state.cart?.cartItems.filter((item) => item._id === id);

// add all items and return the total price
export const selectCartTotal = (state) =>
  state.cart?.cartItems.reduce(
    (total, item) => (total = total + item.price),
    0,
  );

export default cartSlice.reducer;
