import FormTodo from './components/FormTodo';
import NavigationTodo from './components/Navigation';
import TodoItem from './components/TodoItem';

export default function App() {
  return (
    <>
      <div className="todo w-4/12">
        <FormTodo />
        <NavigationTodo />
        <TodoItem />
      </div>
    </>
  );
}
