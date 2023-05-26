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
        {todos == null ? (
          <h3 className="text-2xl font-bold tracking-tight text-cyan-950 text-center">
            You have do not added a todolist yet
          </h3>
        ) : (
          filteredTodo().map((item, i) => (
            <section
              key={i}
              className="border-2 border-[#CFD7DC] md:h-[55px] h-[50px] flex justify-between items-center px-4 text-[#4B5C6B] w-full"
            >
              <section className="flex items-center md:gap-x-[10px] gap-x-[8px]">
                <input
                  value={item.todo}
                  checked={item.completed}
                  onChange={() => handleCheckbox(item.id)}
                  type="checkbox"
                  className="cursor-pointer sm:w-7 sm:h-7 w-6 h-6 focus:ring-1 accent-transparent "
                />
                <h1
                  className={`font-semibold capitalize md:w-[250px] w-[200px] line-clamp-1 md:text-[17px] text-[15px]  ${
                    item.completed && `line-through decoration-2`
                  } `}
                >
                  {item.todo}
                </h1>
              </section>
              <section className="flex items-center md:gap-x-[5px] gap-x-[8px]">
                {!item.completed && (
                  <RiPencilFill
                    onClick={() => handleGetData(item.id, item.todo)}
                    className="md:text-[28px] text-[1.8rem] cursor-pointer"
                  />
                )}
                <MdDeleteForever
                  onClick={() => handleDelete(item.id)}
                  className="md:text-[28px] text-[1.8rem] cursor-pointer"
                />
              </section>
            </section>
          ))
        )}
      </section>
    </>
  );
}
