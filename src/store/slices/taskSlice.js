import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    { id: "1", title: "Belajar Redux Toolkit", completed: true },
    { id: "2", title: "Buat Task Slice", completed: false },
    { id: "3", title: "Implementasi UI", completed: false },
  ],
  isLoading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.tasks.push(action.payload);
      },
      prepare: (title) => {
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false,
          },
        };
      },
    },
    deleteTask: (state, action) => {
      const idToDelete = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== idToDelete);
    },
    toggleComplete: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, deleteTask, toggleComplete } = taskSlice.actions;

export default taskSlice.reducer;
