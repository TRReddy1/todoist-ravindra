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
    taskDeleted: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    taskUpdated: (state, action) => {
      const { id, res } = action.payload;
      return state.map((task) => {
        if (task.id === id) {
          return { ...res };
        }
        return task;
      });
    },
    taskCompleted: (state, action) => {
      // const { id,  } = action.payload;
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const {
  fetchedTasks,
  taskAdded,
  taskDeleted,
  taskUpdated,
  taskCompleted,
} = tasksSlice.actions;
export default tasksSlice.reducer;
