import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import "./assets/scss/theme.scss";
import { Provider } from "react-redux"
import store  from "./redux";

import App from './App';

const element = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

const container = document.getElementById('root');
ReactDOM.render(element, container);
