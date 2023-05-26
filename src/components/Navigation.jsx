import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from './../redux/todosSlice';

export default function NavigationTodo() {
  const filterBy = useSelector(state => state.todos.filterBy);
  const dispatch = useDispatch();
  const selectFilter = [
    {
      id: 1,
      filter: 'ALL',
    },
    {
      id: 2,
      filter: 'ACTIVE',
    },
    {
      id: 3,
      filter: 'COMPLETED',
    },
  ];

  const handleClick = (id, filter) => {
    selectFilter.map(el =>
      el.id == id ? (el.isSelected = true) : (el.isSelected = false)
    );
    dispatch(
      updateFilter({
        filterBy: filter,
      })
    );
  };

  return (
    <nav className="nav-todo w-full my-12">
      <ul className="flex list-none gap-4">
        {selectFilter.map(item => (
          <li key={item.id}>
            <button
              type="button"
              className={`px-4 py-1 text-sm font-semibold text-center text-white rounded-3xl hover:bg-slate-800 focus:outline-none focus:ring-slate-300 ${
                item.filter == filterBy ? `bg-[#1BAF9F]` : `bg-[#788997]`
              }`}
              onClick={() => handleClick(item.id, item.filter)}
            >
              {item.filter}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
