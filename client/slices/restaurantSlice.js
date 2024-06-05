import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: null,
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      // change the restaurant to the payload we've passed
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

// function that returns this restaurant
// call the restaurant slice from the root state and return the restaurant value
export const selectRestaurant = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
