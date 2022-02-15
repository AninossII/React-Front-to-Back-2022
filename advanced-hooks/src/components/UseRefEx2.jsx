import { useState, useEffect, useRef } from 'react';

function UseRefEx2() {
  const [name, setName] = useState('');
  const renders = useRef(1);
  const prevName = useRef('');

  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);

  const onSubmit = (e) => {
    e.prevendDefault();
  };

  return (
    <form onSubmit={onSubmit} action=''>
      <div className='form-control'>
        <h1>hellow World: {renders.current}</h1>
        <h1>prevName: {prevName.current}</h1>
        <div className='flex space-x-2'>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='pr-16 input input-primary input-bordered'
          />
          <button className='  btn btn-primary'>Go</button>
        </div>
      </div>
    </form>
  );
}

export default UseRefEx2;
