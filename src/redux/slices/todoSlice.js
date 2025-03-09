import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    inputValue: "",
    todoList: [],
    doneTodos: [],
  },
  reducers: {
    handleInput: (state, { payload }) => {
      state.inputValue = payload;
    },
    addTodo: (state, { payload }) => {
      state.todoList = [...state.todoList, payload];
      state.inputValue = "";
    },
    deleteTodo: (state, { payload }) => {
      const newTodoList = state.todoList.filter((el) => el !== payload);
      state.todoList = newTodoList;
    },

    completeTodo: (state, { payload }) => {
      const completeTodo = state.todoList.filter((el) => el == payload);
      if (completeTodo.length) {
        state.doneTodos = [...state.doneTodos, ...completeTodo];
        const newTodoList = state.todoList.filter((el) => el !== payload);
        state.todoList = newTodoList;
      }
    },
    completeTodoDelete: (state, { payload }) => {
      const newTodoList = state.doneTodos.filter((el) => el !== payload);
      state.doneTodos = newTodoList;
    },
  },
});

export const {
  handleInput,
  addTodo,
  deleteTodo,
  completeTodo,
  doneTodos,
  completeTodoDelete,
} = todoSlice.actions;
export default todoSlice.reducer;
