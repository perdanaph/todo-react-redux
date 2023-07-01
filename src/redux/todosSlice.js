import { createSlice } from '@reduxjs/toolkit';

const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem('todos');

  if (localTodoList) {
    return JSON.parse(localTodoList);
  }

  window.localStorage.setItem('todos', []);
  return [];
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: getInitialTodo(),
    filterBy: 'ALL',
  },

  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      const todoList = window.localStorage.getItem('todos');
      if (todoList) {
        const todoListArray = JSON.parse(todoList);
        todoListArray.push({ ...action.payload });
        window.localStorage.setItem('todos', JSON.stringify(todoListArray));
      } else {
        window.localStorage.setItem(
          'todos',
          JSON.stringify([{ ...action.payload }])
        );
      }
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
      const newTodo = state.todos;
      localStorage.setItem('todos', JSON.stringify(newTodo));
    },

    compledeTodo: (state, action) => {
      state.todos = state.todos.map(el =>
        el.id == action.payload.id ? { ...el, completed: !el.completed } : el
      );
      const newTodo = state.todos;
      localStorage.setItem('todos', JSON.stringify(newTodo));
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map(el =>
        el.id == action.payload.id ? { ...el, todo: action.payload.todo } : el
      );
      const newTodo = state.todos;
      localStorage.setItem('todos', JSON.stringify(newTodo));
    },

    updateFilter: (state, action) => {
      state.filterBy = action.payload.filterBy;
    },
  },
});

export const { addTodo, deleteTodo, compledeTodo, updateTodo, updateFilter } =
  todosSlice.actions;

export default todosSlice.reducer;
