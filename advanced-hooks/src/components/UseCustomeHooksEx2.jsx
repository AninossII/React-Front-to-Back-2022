import useLocalStorage from '../hooks/useLocalStorage';

function UseCustomeHooksEx2() {
  const [task, setTask] = useLocalStorage('task', '');
  const [tasks, setTasks] = useLocalStorage('task', []);

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString,
    };

    setTasks([...tasks, taskObj]);
  };

  return (
    <div>
      <form onSubmit={onSubmit} action=''>
        <div className='mb-3'>
          <label htmlFor='' className='form-lable'>
            Task
          </label>
          <input
            type='text'
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className='input form-control input-bordered'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default UseCustomeHooksEx2;
