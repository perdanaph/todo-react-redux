import { useState } from 'react';
import FormTodo from './components/FormTodo';
import NavigationTodo from './components/Navigation';
import TodoItem from './components/TodoItem';

export default function App() {
  const [id, setId] = useState(0);
  const [todo, setTodo] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  function getTodo(id, todo) {
    setId(id), setTodo(todo);
    setIsUpdate(true);
  }
  const updateDone = () => setIsUpdate(false);
  return (
    <>
      <div className="todo w-4/12">
        <FormTodo
          id={id}
          todoUpdate={todo}
          isUpdate={isUpdate}
          done={updateDone}
        />
        <NavigationTodo />
        <TodoItem getTodo={getTodo} />
      </div>
    </>
  );
}
