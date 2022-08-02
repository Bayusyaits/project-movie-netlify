import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import "./assets/scss/theme.scss";
import "./assets/js/bootstrap.js";

import App from './App';

const element = (
  <Router>
    <App />
  </Router>
);

const container = document.getElementById('root');
ReactDOM.render(element, container);