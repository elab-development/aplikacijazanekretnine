import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
  favorites: [],
  bookings: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.favorites = [];
      state.bookings = [];
    },
    addToFavorites: (state, action) => {
      const item = action.payload;
      if (
        !state.favorites.some((favoriteItem) => favoriteItem.id === item.id)
      ) {
        state.favorites.push(item);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (favoriteItem) => favoriteItem.id !== action.payload.id
        
      );
    },
    addToBookings: (state, action) => {
      const item = action.payload;
      if (!state.bookings.some((bookingItem) => bookingItem.id === item.id)) {
        state.bookings.push(item);
      }
    },
    removeFromBookings: (state, action) => {
      state.bookings = state.bookings.filter(
        (bookingItem) => bookingItem.id !== action.payload.id
      );
    },
  },
});

export default userSlice.reducer;
export const {
  login,
  logout,
  addToFavorites,
  removeFromFavorites,
  addToBookings,
  removeFromBookings,
} = userSlice.actions;