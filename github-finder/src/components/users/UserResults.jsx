import { useContext } from 'react';
import Spinner from '../layout/Spinner';
import Useritem from './Useritem';
import GithubContext from '../../context/github/GithubContext';

function UserResults() {
  const { users, isLoading } = useContext(GithubContext);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <Useritem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default UserResults;
