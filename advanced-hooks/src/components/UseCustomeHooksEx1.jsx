import useFetch from '../hooks/useFetch';

function UseCustomeHooksEx1() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  );

  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      {data.map((post) => (
        <div
          key={post.id}
          className='card w-96 bg-base-100 shadow-xl image-full mb-2'
        >
          <figure>
            <img
              src='https://api.lorem.space/image/shoes?w=400&h=225'
              alt='Shoes'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>{post.id}</h2>
            <p>{post.title}</p>
            <div className='justify-end card-actions'>
              <button className='btn btn-primary'>Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UseCustomeHooksEx1;
