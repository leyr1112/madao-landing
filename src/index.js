import ReactDOM from 'react-dom';
import './css/App.css';
import App from "./App"
import {BrowserRouter} from "react-router-dom";
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <BrowserRouter>
 <App /> 
  </BrowserRouter>,
 
  document.getElementById('root')
);


