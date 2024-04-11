import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  isComplete,
  updateTodo,
  isChange,
} from "../feature/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(removeTodo(id));
  };

  const isCompleted = (id, bool) => {
    if (!bool) {
      dispatch(isChange({ id: id, change: true }));
    }
    dispatch(isComplete({ idVal: id, boolVal: !bool }));
  };

  const todoUpdating = (id, change, complete) => {
    if (complete) return;
    dispatch(isChange({ id: id, change: !change }));
  };

  const changeInput = (id, value) => {
    dispatch(updateTodo({ id: id, todo: value }));
  };
  return (
    <div>
      {todos.map((value) => {
        return (
          <div
            className={`mt-4 ${
              value.isComplete ? "bg-blue-300" : "bg-white"
            } flex sm:px-4 px-2 justify-between py-3 rounded transition-all`}
            key={value.id}
          >
            <input
              type="checkbox"
              className="cursor-pointer"
              onChange={() => isCompleted(value.id, value.isComplete)}
              checked={value.isComplete}
            />
            <input
              type="text"
              className={`sm:w-[85%] w-[70%] outline-0 rounded px-2 py-1 transition-all border-gray-400 ${
                value.isComplete ? "line-through" : "no-underline"
              } ${value.isComplete ? "bg-blue-300" : "bg-white"} ${
                value.isChange ? "border-none" : " border"
              }`}
              value={value.todo}
              readOnly={value.isChange}
              onChange={(e) => changeInput(value.id, e.target.value)}
            />
            <button
              className={`cursor-pointer h-8 w-8 transition-all   ${
                value.isComplete
                  ? "bg-[#e4e4e4] opacity-60"
                  : "bg-[#c2c2c2] hover:bg-[#d6d6d6]"
              } rounded`}
              onClick={() =>
                todoUpdating(value.id, value.isChange, value.isComplete)
              }
            >
              {value.isChange ? "📂" : "✔️"}
            </button>
            <button
              className={`cursor-pointer h-8 w-8 hover:bg-[#d6d6d6] transition-all ${
                value.isComplete ? "bg-white" : "bg-[#c2c2c2] "
              } rounded`}
              onClick={() => remove(value.id)}
            >
              🗑
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
