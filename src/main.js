import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/app.scss';

import App from './app'

const app = async () => {
  document.getElementById('app').appendChild(await App())
}

// Load app
app();
