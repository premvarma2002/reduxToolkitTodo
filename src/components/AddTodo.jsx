import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="font-bold text-xl">Add a Todo</h2>
      <form onSubmit={addTodoHandler} className="flex flex-col gap-2">
        <div className="p-4 bg-white rounded-md shadow-sm w-full max-w-sm">
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;