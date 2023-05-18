// import { NavLink } from 'react-router-dom';

export default function NavigationTodo() {
  return (
    <>
      <nav className="nav-todo w-full mt-12">
        <ul className="flex list-none gap-4">
          <li>
            {/* <NavLink> */}
            <button
              type="button"
              className="px-4 py-1 text-sm font-semibold text-center text-white bg-slate-600 rounded-3xl hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
            >
              ALL
            </button>
            {/* </NavLink> */}
          </li>
          <li>
            {/* <NavLink> */}
            <button
              type="button"
              className="px-4 py-1 text-sm font-semibold text-center text-white bg-slate-600 rounded-3xl hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
            >
              ACTIVE
            </button>
            {/* </NavLink> */}
          </li>
          <li>
            {/* <NavLink> */}
            <button
              type="button"
              className="px-4 py-1 text-sm font-semibold text-center text-white bg-slate-600 rounded-3xl hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
            >
              COMPELETED
            </button>
            {/* </NavLink> */}
          </li>
        </ul>
      </nav>
    </>
  );
}
