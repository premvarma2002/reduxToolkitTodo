import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4">
      <div className="font-bold text-xl text-center">Todos</div>
      <ul className="list-none p-0 divide-y divide-gray-200">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center p-4 bg-white rounded-md shadow-sm">
            <span className="flex-grow mr-4 text-lg">{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="px-4 py-2 text-red-500 hover:text-red-700 focus:outline-none"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;