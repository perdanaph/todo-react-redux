import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from './../redux/todosSlice';

export default function FormTodo(props) {
  const { id, todoUpdate, isUpdate, done } = props;
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    value != '' &&
      (dispatch(
        addTodo({
          todo: value,
        })
      ),
      setValue(''));
  };

  const handleUpdate = e => {
    e.preventDefault();
    value != '' &&
      (dispatch(
        updateTodo({
          id,
          todo: value,
        })
      ),
      setValue(''));
    done();
  };

  useEffect(() => {
    setValue(todoUpdate);
  }, [todoUpdate]);

  return (
    <>
      <section className="form-input container">
        <h2 className="text-3xl font-bold tracking-tight text-cyan-950 text-center sm:text-4xl my-16">
          {"What's the plan today?"}
        </h2>
        <form
          action=""
          className="w-full"
          onSubmit={isUpdate ? handleUpdate : handleSubmit}
        >
          <div className="flex gap-6 justify-center">
            <input
              id="todo"
              name="todo"
              type="todo"
              value={value}
              onChange={e => setValue(e.target.value)}
              required
              className="rounded-md border w-4/5 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 text-lg sm:leading-6 font-bold"
              placeholder="What do you want to to?"
            />
            <button
              type="submit"
              className="rounded-md bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              {`${isUpdate ? 'update' : 'add'}`}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
