import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "../features/projectsSlices";
import favoritesReducer from "../features/favoritesSlice";
import tasksReducer from "../features/tasksSlice";

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    favorites: favoritesReducer,
    tasks: tasksReducer,
  },
});
