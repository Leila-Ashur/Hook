import logo from './logo.svg';
import Products from './Products';
import Navbar from './Navbar';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
   <div>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path='/home'element={<Products />}/>
      <Route path='/home'element={<Products />}/>
      <Route path='/about'element={<Products />}/>
      
    </Routes>
    </BrowserRouter>
   </div>
);
}
   
 

export default App;
