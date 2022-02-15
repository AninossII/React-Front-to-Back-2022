import { useState, useEffect, useRef, useMemo } from 'react';

function UseMemoEx() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  //const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;

    return () => {};
  });

  const onClick = () => {
    setInc((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <div>
      <div className='flex space-x-2'>
        <input
          type='number'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className='form-control input input-borderd input-primary input-sm'
        />

        <button onClick={onClick} className='btn btn-primary btn-sm'>
          Re Render
        </button>
      </div>
      <h2>
        the sqrt of {number} is {sqrt}
      </h2>
      Renders: {renders.current}
    </div>
  );

  function getSqrt(n) {
    for (let i = 0; i <= 10000; i++) {
      console.log(i);
    }
    console.log('Expensive Function Called!');
    return Math.sqrt(n);
  }
}

export default UseMemoEx;
