import './../css/styleTodoItem.css';
import { MdDeleteForever } from 'react-icons/md';
import { RiPencilFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { compledeTodo, deleteTodo } from './../redux/todosSlice';

export default function TodoItem(props) {
  const { getTodo } = props;
  const todos = useSelector(state => state.todos.todos);
  const filterBy = useSelector(state => state.todos.filterBy);
  const dispatch = useDispatch();
  const handleCheckbox = id =>
    dispatch(
      compledeTodo({
        id,
      })
    );

  const handleDelete = id =>
    dispatch(
      deleteTodo({
        id,
      })
    );

  const handleGetData = (id, todo) => getTodo(id, todo);

  const filteredTodo = () => {
    if (filterBy === 'COMPLETED') {
      return todos.filter(todo => todo.completed);
    }
    if (filterBy === 'ACTIVE') {
      return todos.filter(todo => !todo.completed);
    }

    return todos;
  };
  return (
    <>
      <section className="flex flex-col w-full h-full md:gap-y-[20px] gap-y-[40px]">
        {filteredTodo().map((el, i) => (
          <section
            key={i}
            className="border-2 border-[#CFD7DC] md:h-[55px] h-[50px] flex justify-between items-center px-4 text-[#4B5C6B] w-full"
          >
            <section className="flex items-center md:gap-x-[10px] gap-x-[8px]">
              <input
                value={el.todo}
                checked={el.completed}
                onChange={() => handleCheckbox(el.id)}
                type="checkbox"
                className="cursor-pointer md:w-7 w-5  md:h-7 h-5 focus:ring-0 accent-gray-500 "
              />
              <h1
                className={`font-semibold capitalize md:w-[250px] w-[200px] line-clamp-1 md:text-[17px] text-[15px]  ${
                  el.completed && `line-through decoration-2`
                } `}
              >
                {el.todo}
              </h1>
            </section>
            <section className="flex flex-row items-center md:gap-x-[5px] gap-x-[3px]">
              {!el.completed && (
                <RiPencilFill
                  onClick={() => handleGetData(el.id, el.todo)}
                  className="md:text-[28px] text-[23px] cursor-pointer"
                />
              )}
              <MdDeleteForever
                onClick={() => handleDelete(el.id)}
                className="md:text-[28px] text-[23px] cursor-pointer"
              />
            </section>
          </section>
        ))}
      </section>
    </>
  );
}
