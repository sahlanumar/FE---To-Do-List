import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    { id: "1", title: "Belajar Redux Toolkit", completed: true },
    { id: "2", title: "Buat Task Slice", completed: false },
  ],
  isLoading: false,
  error: null,
  filterStatus: "all",
  searchKeyword: "",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTaskStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    addTaskSuccess: {
      reducer: (state, action) => {
        state.tasks.push(action.payload);
        state.isLoading = false;
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
    addTaskFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
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
    editTask: (state, action) => {
      const { id, newTitle } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.title = newTitle;
      }
    },
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
});

export const {
  addTaskStart,
  addTaskSuccess,
  addTaskFailure,
  deleteTask,
  toggleComplete,
  editTask,
  setFilterStatus,
  setSearchKeyword,
} = taskSlice.actions;

export default taskSlice.reducer;
