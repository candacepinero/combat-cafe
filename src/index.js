import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from "../src/Components/Nav"
import About from "./pages/About"
import Footer from './Components/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Nav/>
  <Routes>
    <Route exact path="/" element={<App/>}/>
    <Route exact path="/about" element={<About/>}/>

  </Routes>
  <Footer/>

</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
