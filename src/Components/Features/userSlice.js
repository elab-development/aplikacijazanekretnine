import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
  favorites: [],
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
  },
});

export default userSlice.reducer;
export const { login, logout, addToFavorites, removeFromFavorites } =
  userSlice.actions;