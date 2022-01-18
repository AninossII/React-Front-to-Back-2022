import reactDom from 'react-dom';
import react from 'react';
import './index.css';
import App from './App';

reactDom.render(
  <react.StrictMode>
    <App />
  </react.StrictMode>,
  document.getElementById('root')
);
