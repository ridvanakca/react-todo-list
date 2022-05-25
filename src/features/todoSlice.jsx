import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      { id: "a", title: "BEN BİR KEK MİYİM", completed: false },
      { id: "b", title: "BEN BİR İKİ MİYİM", completed: false },
      { id: "c", title: "BEN BİR HİÇ MİYİM", completed: false },
      { id: "d", title: "BEN BİR İSMAİL MİYİM", completed: false },
    ],
  },
  reducers: {
    add: (state, action) => {
      const newTodo = { id: v4(), title: action.payload, completed: false };
      state.todos.push(newTodo);
    },
    remove: (state, action) => {
      const updatedList = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = updatedList;
    },
    toggleCompleted: (state, action) => {
      const updatedList = state.todos.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo));
      state.todos = updatedList;
    },
  },
});

export const { add, remove, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;
