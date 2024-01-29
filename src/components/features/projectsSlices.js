import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const projectsSlice = createSlice({
  name: "projectsSlice",
  initialState,
  reducers: {
    fetchedProjects: (state, action) => {
      return action.payload;
    },
    projectAdded: (state, action) => {
      state.push(action.payload);
    },
    projectEdited: (state, action) => {
      const { id, res } = action.payload;
      const idx = state.findIndex((p) => p.id === id);

      state.splice(idx, 1, res);
    },
    projectDeleted: (state, action) => {
      return state.filter((project) => project.id !== action.payload);
    },
    setFavorites: (state, action) => {
      state.map((p) => {
        if (p.id === action.payload) {
          p.is_favorite = p.is_favorite ? false : true;
        }
      });
      // console.log(state);
    },
  },
});

export const {
  fetchedProjects,
  projectAdded,
  projectEdited,
  projectDeleted,
  setFavorites,
} = projectsSlice.actions;
export default projectsSlice.reducer;
