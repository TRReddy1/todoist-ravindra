import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    fetchedTasks: (state, action) => {
      const { id, res } = action.payload;
      return res.filter((r) => r.project_id === id);
    },
    taskAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { fetchedTasks, taskAdded } = tasksSlice.actions;
export default tasksSlice.reducer;
