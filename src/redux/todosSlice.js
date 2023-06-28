import { createSlice } from '@reduxjs/toolkit';

let data = JSON.parse(localStorage.getItem('todos'));
if (data == null) {
  data = [];
}
export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    filterBy: 'ALL',
  },

  reducers: {
    fetchTodo: state => {
      state.todos = JSON.parse(localStorage.getItem('todos'));
      state.filterBy = 'ALL';
    },
    addTodo: (state, action) => {
      const newTodo = {
        id: Math.random().toString(16).slice(2),
        todo: action.payload.todo,
        completed: false,
      };
      const item = JSON.stringify([...state.todos, newTodo]);
      localStorage.setItem('todos', item);
      state.todos = [...state.todos, newTodo];
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

export const {
  fetchTodo,
  addTodo,
  deleteTodo,
  compledeTodo,
  updateTodo,
  updateFilter,
} = todosSlice.actions;

export default todosSlice.reducer;
