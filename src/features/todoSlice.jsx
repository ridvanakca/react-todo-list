import { createSlice } from "@reduxjs/toolkit";
import uuid from "uuid";

const initialState = [];

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    add: (state, action) => {
      const newTodo = { id: uuid.v4(), title: action.payload, completed: false };
      state.push(newTodo);
    },
  },
});

export const { add } = todoSlice.actions;
export default todoSlice.reducer;
