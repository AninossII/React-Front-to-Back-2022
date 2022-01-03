import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About</h1>
        <p>This is a React app to leave Feedback for a server or a Product!</p>
        <p>version: 1.0</p>

        <p>
          <Link to='/'>Back To Home</Link>{' '}
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
