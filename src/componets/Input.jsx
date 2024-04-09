import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../feature/todoSlice";

function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todoHandler = (e) => {
    e.preventDefault();
    if (input == "") return;
    dispatch(addTodo({ todo: input, isComplete: false, isChange: true }));
    setInput("");
  };
  return (
    <div>
      <form
        className="flex justify-between items-center"
        onSubmit={todoHandler}
      >
        <input
          type="text"
          className={`outline-0 border-none xl:w-[85%] w-[70%] rounded px-3 h-full py-2 font-medium`}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <input
          type="button"
          value="Add Now"
          className="bg-white px-4 py-2 rounded font-medium transition-all hover:bg-[rgb(220,191,25)] hover:text-white"
          onClick={todoHandler}
        />
      </form>
    </div>
  );
}

export default Input;
