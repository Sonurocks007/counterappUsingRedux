import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
} from "../redux/slices/TodoSlice";
import { Input, Button } from "./index";
import { CiSearch } from "react-icons/ci";
import { MdAddTask, MdAutoDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Todo = () => {
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [searchTask, setSearchTask] = useState("");
  const [search, setSearch] = useState(false);

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTask.toLowerCase())
  );
  const truncateText = (text) => {
  return text.length > 15 ? text.substring(0, 10) + "..." : text;
};


  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo({ text, completed: false }));
      setText("");
    }
  };

  const handleEdit = (id, currentText) => {
    setEditingId(id);
    setEditText(currentText);
  };
  const handleUpdate = (id) => {
    if (editText.trim()) {
      dispatch(editTodo({ id, newText: editText }));
      setEditingId(null);
      setEditText("");
    }
  };
  return (
    <div className="w-[400px] h-[500px] mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl border border-gray-200 ">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Todo App
      </h2>

      <h1 className="flex justify-end mb-2">
        <CiSearch
          className="text-gray-700 w-8 h-8 cursor-pointer hover:text-blue-600"
          onClick={() => setSearch(!search)}
        />
      </h1>

      {search && (
        <Input
          value={searchTask}
          onChange={(e) => setSearchTask(e.target.value)}
          placeholder=" Search tasks..."
          style="flex-1 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd();
        }}
        className="flex gap-4 mt-3 mb-6"
      >
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder=" Add new task"
          style="flex-1 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        <Button
          Icon={<MdAddTask />}
          onClick={handleAdd}
          style="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2"
        />
      </form>

      <ul className="space-y-3  overflow-y-auto overflow-x-hidden pr-2 scrollbar-thin h-[300px]">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => dispatch(toggleTodo(todo.id))}
            className={`width-full ${
              todo.completed
                ? "flex justify-between items-center w-[350px] h-12 bg-gray-100 p-3 cursor-pointer rounded-lg shadow-sm hover:shadow-md transition line-through text-gray-600"
                : "flex justify-between items-center w-[350px] h-12 bg-gray-100 p-3 cursor-pointer rounded-lg shadow-sm hover:shadow-md transition"
            }`}
          >
            {editingId === todo.id ? (
              <Input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                placeholder="Edit task"
                style="flex-1 mr-2 border-gray-300 rounded-md"
              />
            ) : (
              <span className="flex-1 text-gray-800 truncate">{truncateText(todo.text)}</span>
            )}

            <div className="flex gap-2 ml-2">
              {editingId === todo.id ? (
                <Button
                  title="Update"
                  onClick={() => handleUpdate(todo.id)}
                  style="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                />
              ) : (
                <Button
                  Icon={<FaEdit className="w-5 h-5" />}
                  onClick={() => handleEdit(todo.id, todo.text)}
                  style="bg-yellow-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                />
              )}
              <Button
                Icon={<MdAutoDelete />}
                onClick={() => dispatch(deleteTodo(todo.id))}
                style="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
