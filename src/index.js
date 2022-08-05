import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Nav from "../src/Components/Nav"
import About from "./pages/About"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Nav/>
 
  <Routes>
    <Route exact path="/" element={<App/>}/>
    <Route exact path="/about" element={<About/>}/>

  </Routes>

</BrowserRouter>
);

