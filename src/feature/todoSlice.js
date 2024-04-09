import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        todo: action.payload.todo,
        isComplete: action.payload.isComplete,
        isChange: action.payload.isChange,
      };
      state.todo.push(todo);
    },
    removeTodo: (state, action) => {
      const todo = state.todo.filter((value) => value.id !== action.payload);
      state.todo = todo;
    },
    isChange: (state, action) => {
      state.todo = state.todo.map((value) => {
        value.id == action.payload.id
          ? {
              id: value.id,
              todo: value.todo,
              isComplete: value.isComplete,
              isChange: action.payload.change,
            }
          : value;
      });
    },
    isChange: (state, action) => {
      state.todo = state.todo.map((value) =>
        value.id === action.payload.id
          ? {
              ...value,
              isChange: action.payload.change,
            }
          : value
      );
    },

    isComplete: (state, action) => {
      state.todo = state.todo.map((value) =>
        value.id === action.payload.idVal
          ? {
              ...value,
              isComplete: action.payload.boolVal,
            }
          : value
      );
    },

    updateTodo: (state, action) => {
      state.todo = state.todo.map((value) =>
        value.id === action.payload.id
          ? {
              ...value,
              todo: action.payload.todo,
            }
          : value
      );
    },
  },
});

export const { addTodo, removeTodo, isComplete, updateTodo, isChange } =
  todoSlice.actions;
export default todoSlice.reducer;
