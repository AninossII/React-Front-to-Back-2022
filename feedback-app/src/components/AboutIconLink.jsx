import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AboutIconLink() {
  return (
    <div>
      <div className='about-link'>
        <Link
          to={{
            pathname: '/about',
            search: '?swort',
            hash: '#hello',
          }}
        >
          <FaQuestion size={30} />
        </Link>
      </div>
    </div>
  );
}

export default AboutIconLink;
