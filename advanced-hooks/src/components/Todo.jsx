import { useState, useEffect, useRef } from 'react';

function Todo() {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({});

  const isMounted = useRef(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => {
        if (isMounted.current) {
          setTodo(data);
          setLoading(false);
        }
      });

    // Run wen component is unmounted
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return loading ? <h1>isLoading...</h1> : <h1>{todo.title}</h1>;
}

export default Todo;
