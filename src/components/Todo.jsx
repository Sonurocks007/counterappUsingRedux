import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from '../redux/slices/TodoSlice';
import { Input,Button } from "./index";

const Todo = () => {
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  const handleEdit = (id, currentText) => {
    setEditingId(id);
    setEditText(currentText);
  };

  const handleSave = (id) => {
    if (editText.trim()) {
      dispatch(editTodo({ id, newText: editText }));
      setEditingId(null);
      setEditText('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Todo App</h2>

      <div className="flex gap-2 mb-4">
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a todo"
          inputClass="flex-1"
        />
        <Button title="Add" onClick={handleAdd} />
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center mb-2">
            {editingId === todo.id ? (
              <Input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                placeholder="Edit todo"
                inputClass="mr-2 flex-1"
              />
            ) : (
              <span className="flex-1">{todo.text}</span>
            )}

            <div className="flex gap-2 ml-2">
              {editingId === todo.id ? (
                <Button
                  title="Save"
                  onClick={() => handleSave(todo.id)}
                  style="bg-green-600"
                />
              ) : (
                <Button
                  title="Edit"
                  onClick={() => handleEdit(todo.id, todo.text)}
                  style="bg-yellow-600"
                />
              )}
              <Button
                title="Delete"
                onClick={() => dispatch(deleteTodo(todo.id))}
                style="bg-red-600"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
