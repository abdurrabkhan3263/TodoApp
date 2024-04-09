import { useEffect } from "react";
import Input from "./componets/Input";
import Todos from "./componets/Todos";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./feature/todoSlice";

function App() {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("todo"));
    if (data && data.length > 0) {
      data.map((value) => {
        dispatch(addTodo(value));
      });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  return (
    <div className="bg-[#DC6B19] w-screen h-screen flex justify-start items-center flex-col pt-10 overflow-x-hidden">
      <h1 className="text-4xl font-bold mb-4 selection:bg-yellow-300">
        Manage Our Todo
      </h1>
      <div className="sm:w-[40%] w-[100%]  rounded py-2 sm:px-4 px-2 shadow-lg">
        <Input />
        <Todos />
      </div>
    </div>
  );
}

export default App;
