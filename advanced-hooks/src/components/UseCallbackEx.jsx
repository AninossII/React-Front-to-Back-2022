import React, { useState, useCallback } from 'react';

function UseCallBackEx() {
  const [tasks, setTaskes] = useState([]);

  const addTask = useCallback(() => {
    setTaskes((prevState) => [...prevState, 'Some Task']);
  }, [setTaskes]);

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <div key={index} className='alert mb-2 alert-success'>
          <div className='flex-1 '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='w-6 h-6 mx-2 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
              ></path>
            </svg>
            <p>{task}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const Button = React.memo(({ addTask }) => {
  console.log('Button Renderd');

  return (
    <div>
      <button onClick={addTask} className='btn btn-primary btn-md mb-2'>
        Add Task
      </button>
    </div>
  );
});

export default UseCallBackEx;
