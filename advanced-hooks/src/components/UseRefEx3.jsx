import { useState } from 'react';
import Todo from './Todo';

function UseRefEx3() {
  const [showTodo, setShowTodo] = useState(true);

  return (
    <>
      {showTodo && <Todo />}
      <button
        onClick={() => setShowTodo(!showTodo)}
        className='btn btn-primary'
      >
        Toggle Todo
      </button>
    </>
  );
}

export default UseRefEx3;
