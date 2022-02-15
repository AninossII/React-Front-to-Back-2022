import { useRef } from 'react';

function UseRefEx1() {
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          ref={inputRef}
          id='name'
          className='form-control input input-bordered mb-2'
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default UseRefEx1;
