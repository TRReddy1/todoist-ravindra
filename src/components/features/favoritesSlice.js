import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
  name: "favoritesSlice",
  initialState,
  reducers: {
    fetchedFavorites: (state, action) => {
      return action.payload.filter((project) => project.is_favorite);
    },
    addedFavorites: (state, action) => {
      //   action.payload.is_favorite = true;
      state.push(action.payload);
    },
    removedFavorite: (state, action) => {
      return state.filter((p) => p.id !== action.payload.id);
    },
  },
});

export const { fetchedFavorites, addedFavorites, removedFavorite } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
