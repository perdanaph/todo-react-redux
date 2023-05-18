import './../css/styleTodoItem.css';
import { motion } from 'framer-motion';
import { MdDeleteForever, MdEditSquare } from 'react-icons/md';

export default function TodoItem(props) {
  const { todo, updateTodo, removeTodo, completedTodo } = props;
  return (
    <>
      <section className="todo-list">
        <MdDeleteForever />
      </section>
    </>
  );
}
