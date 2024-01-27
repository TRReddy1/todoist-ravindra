import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
  name: "favoritesSlice",
  initialState,
  reducers: {
    fetchedFavorites: (state, action) => {
      action.payload;
    },
  },
});

export const { fetchedFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
