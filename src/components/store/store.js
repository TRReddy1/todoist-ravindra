import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "../features/projectsSlices";
import favoritesReducer from "../features/favoritesSlice";

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    favorites: favoritesReducer,
  },
});
